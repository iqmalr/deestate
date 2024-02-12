import { motion } from "framer-motion";
import React from "react";
import ico from "../assets/icons/logo_deestate.png";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className=""
    >
      <div className="min-h-6 mt-[50px]"></div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-[20px] md:gap-[127px] text-grey mx-[50px] md:mx-[100px]">
        <div className="w-[294px] bg-slate-600">
          <img className="w-[140px] h-[42px] mb-[24px]" src={ico} alt="" />
          <div className="text-base font-semibold">
            We are an established property
          </div>
        </div>
        <div className=" w-[90px] bg-slate-600">
          <div className="mb-[24px] text-base font-bold text-black">
            Company
          </div>
          <div className="text-sm font-semibold ">Properties</div>
          <div className="text-sm font-semibold ">Agents</div>
          <div className="text-sm font-semibold ">Career</div>
          <div className="text-sm font-semibold ">Contact</div>
        </div>
        <div className="w-[93px] bg-slate-600">
          <div className="mb-[24px] text-base font-bold text-black">
            Contact Us
          </div>
          <div className="text-sm font-semibold ">Website</div>
          <div className="text-sm font-semibold ">Email</div>
          <div className="text-sm font-semibold ">Whatsapp</div>
        </div>
        <div className="w-[90px] bg-slate-600">
          <div className=" mb-[24px] text-base font-bold text-black">
            Support
          </div>
          <div className="text-sm font-semibold ">FAQ</div>
          <div className="text-sm font-semibold ">Booking</div>
          <div className="text-sm font-semibold ">City Guide</div>
        </div>
        <div className="w-[294px] bg-slate-600">
          <div className="mb-[24px] text-base font-bold text-black">Office</div>
          <div className="text-sm font-semibold">
            Jl. Jombor Lor Kec. Mlati, Kabupaten Sleman, Daerah Istimewa
            Yogyakarta
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
