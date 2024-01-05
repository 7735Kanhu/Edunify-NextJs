import React from "react";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn   } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-[1280px] mx-auto py-4 flex justify-between flex-wrap px-3 justify-center">
        <div className="flex gap-4 flex-col">
          <img src="/assets/schoollogo.png" alt="logo" className="w-max"/>
          <p className="w-72">
            <span className="font-bold">Schoolsindia</span> is India’s most comprehensive school
            search platform. Playschools, PreSchools, Day Schools and Boarding
            Schools.
          </p>
          <div className="flex gap-3">
            <MdLocationPin />
            <p>Bhubaneswar, Odisha, 752054</p>
          </div>
          <div className="flex gap-3">
            <FiPhoneCall />
            <p>+91 7735432994</p>
          </div>
          <div className="flex gap-4 text-black">
            <FaFacebookF className="hover:text-orange-500 cursor-pointer bg-white p-1 rounded text-2xl" />
            <FaTwitter className="hover:text-orange-500 cursor-pointer bg-white p-1 rounded text-2xl" />
            <FaLinkedinIn className="hover:text-orange-500 cursor-pointer bg-white p-1 rounded text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">Important Links</h2>
            <p className="cursor-pointer">Schools in India</p>
            <p className="cursor-pointer">Other Schools in India</p>
            <p className="cursor-pointer">Advertise With Us</p>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">Support</h2>
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms and Conditions</p>
            <p className="cursor-pointer">Refund Policy</p>
            <p className="cursor-pointer">Contact Us</p>
            <p className="cursor-pointer">About Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
