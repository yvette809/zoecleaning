"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { motion } from "framer-motion";
import MapUI from "./MapUI";

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
      name: formData.name,
      tel: formData.tel,
      email: formData.email,
      message: formData.message,
      from_name: formData.name,
      reply_to: formData.email,
      to_name: "Zoe Cleaning AB",
    };

    try {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2,
        emailData
      );

      setStatus("Tack! Vi har mottagit ditt meddelande och återkommer snart.");
      setErrors(null);
      // Reset form data but keep the form visible
      setFormData({ name: "", tel: "", email: "", message: "" });
      // Hide the success message after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      setStatus(null);
      setErrors({ form: "Kunde inte skicka. Försök igen senare." });
    }
  };

  return (
    <section
      className="mt-6 p-6 bg-[#0f3f38] container mx-auto z-10 scroll-mt-[7rem]"
      id="contact-us"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <div className="text-xl text-gray-400">
          📞 <strong>Behöver du hjälp?</strong>
          <p className="inline-block px-4 py-2 rounded-full mx-3 text-gray-400 font-medium">
            Kontakta oss
          </p>{" "}
          idag för en <strong>kostnadsfri offert!</strong>
        </div>
        <div className="text-gray-500 font-bold">
          <p>Tel: 0767-115 241</p>
          <p>Epost: rose@zoecleaning.se</p>
        </div>
      </motion.div>

      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white my-6 text-center"
      >
        KONTAKTA OSS
      </motion.h2>

      {status && (
        <motion.div
          className="text-center text-green-500 text-lg my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {status}
        </motion.div>
      )}

      <motion.div
        className="flex flex-col-reverse lg:flex-row gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "tel", "email", "message"].map((field, i) => (
              <motion.div
                key={field}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66a966]"
                  />
                ) : (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows="5"
                    className="p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66a966]"
                  />
                )}
                {errors?.[field] && (
                  <span className="text-red-500 text-sm">
                    {errors[field]?._errors.join(", ")}
                  </span>
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              className="w-full bg-[#66a966] text-white font-bold py-2 px-4 rounded-md hover:bg-[#558f58] focus:outline-none focus:ring-2 focus:ring-[#66a966]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Skicka nu
            </motion.button>

            {errors?.form && (
              <div className="mt-4 text-center text-red-500">{errors.form}</div>
            )}
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MapUI />
        </motion.div>
      </motion.div>
    </section>
  );
}
