"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import MapUI from "./MapUI";

// Define Zod schema for form validation
const ContactUsSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  tel: z.string().nonempty("Tel is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().nonempty("Message is required"),
});

export default function ContactUS() {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = ContactUsSchema.safeParse(formData);

    if (!result.success) {
      const validationErrors = result.error.format();
      setErrors(validationErrors);
      return;
    }

    const emailData = {
      ...formData,
      to_name: "Zoe Cleaning AB",
    };

    try {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2,
        emailData
      );

      setStatus(
        "Thanks, We have received your email, and we will get back to you shortly!"
      );
      setErrors(null);

      setFormData({
        name: "",
        tel: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus(null);
      setErrors({ form: "Failed to submit. Please try again." });
    }
  };

  return (
    <div className="mt-6 p-6 bg-[#0f3f38] container mx-auto z-10">
      {/* Contact CTA */}
      <div className="text-center mt-8">
        <div className="text-xl text-gray-400">
          📞 <strong>Behöver du hjälp?</strong>
          <p className=" inline-block px-4 py-2 rounded-full mx-3 text-gray-400 font-medium">
            Kontakta oss
          </p>{" "}
          idag för en <strong>kostnadsfri offert!</strong>
        </div>
        <div className="text-gray-500 font-bold">
          <p>Tell: 0767-115 241</p>
          <p>Epost: rose@zoeClean.com</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white my-6 text-center">
        KONTAKTA OSS
      </h2>

      {status && (
        <div className="text-center text-green-500 text-lg my-4">{status}</div>
      )}

      {/* Conditionally render the form only if no status */}
      {!status && (
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Left Section - Form */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66a966]"
                />
                {errors?.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name?._errors.join(", ")}
                  </span>
                )}
              </div>

              {/* Tel */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  placeholder="Tel"
                  className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66a966]"
                />
                {errors?.tel && (
                  <span className="text-red-500 text-sm">
                    {errors.tel?._errors.join(", ")}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66a966]"
                />
                {errors?.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email?._errors.join(", ")}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="5"
                  className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66a966]"
                />
                {errors?.message && (
                  <span className="text-red-500 text-sm">
                    {errors.message?._errors.join(", ")}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#66a966] text-white font-bold py-2 px-4 rounded-md hover:bg-[#558f58] focus:outline-none focus:ring-2 focus:ring-[#66a966]"
              >
                Send Now
              </button>

              {/* Errors */}
              {errors?.form && (
                <div className="mt-4 text-center text-red-500">
                  {errors.form}
                </div>
              )}
            </form>
          </div>

          {/* Right Section - Map */}
          <div className="w-full lg:w-1/2">
            <MapUI />
          </div>
        </div>
      )}
    </div>
  );
}
