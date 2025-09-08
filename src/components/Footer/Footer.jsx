import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'; // Discord, LinkedIn, Instagram, YouTube
import { RxTwitterLogo } from 'react-icons/rx'; // X (formerly Twitter)

const Footer = () => {
  return (
    <footer className="bg-[#1A1E22] text-white py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Logos */}
        <div className="flex justify-center space-x-8 mb-6">
        <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition duration-300"
      >
        <RxTwitterLogo size={30} />
      </a>
      <a
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-indigo-600 transition duration-300"
      >
        <FaDiscord size={30} />
      </a>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-700 transition duration-300"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-pink-500 transition duration-300"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-red-600 transition duration-300"
      >
        <FaYoutube size={30} />
      </a>
        </div>

        {/* Copyright Text */}
        <div className="mb-4">
          <p>Copyright © 2024 Sarvesh. All Rights Reserved.</p>
        </div>

        {/* Legal Links */}
        <div className="space-x-4">
          <Link to="#" className="hover:underline">
          Contact Us
          </Link>
          <span>|</span>
          <Link to="#" className="hover:underline">
          Legal Policy
          </Link>
          <span>|</span>
          <Link to="#" className="hover:underline">
          Privacy Policy

          </Link>
          <span>|</span>
          <Link to="#" className="hover:underline">
          Manage Cookies
          </Link>
          <span>|</span>
          <Link to="#" className="hover:underline">
          Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
