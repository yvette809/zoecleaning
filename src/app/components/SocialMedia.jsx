import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const SocialMedia = () => {
  const url = encodeURIComponent("https://zoecleaning.se");
  const text = encodeURIComponent(
    "Kolla in detta fantastiska företag i Stockholm! ⭐️"
  );

  return (
    <div className="text-center px-4">
      <p className="text-3xl font-medium py-12">
        Hjälp oss och dela på sociala medier
      </p>
      <div className="flex justify-center items-center gap-6 flex-wrap">
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dela på Facebook"
          className="text-blue-600 hover:text-blue-800 transition duration-300 text-3xl"
        >
          <FaFacebook />
        </Link>

        <Link
          href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dela på Twitter"
          className="text-sky-500 hover:text-sky-700 transition duration-300 text-3xl"
        >
          <FaTwitter />
        </Link>

        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dela på LinkedIn"
          className="text-blue-700 hover:text-blue-900 transition duration-300 text-3xl"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
