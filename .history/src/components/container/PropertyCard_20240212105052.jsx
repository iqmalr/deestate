import React from "react";
import bed2 from "../../assets/bed-ico2.png";
// import bed2 from "../../assets/icons/bed-ico2.png";
import areaico from "../../assets/icons/size-ico.png";
import toilet from "../../assets/icons/toilet-ico.png";

// import Hero from "../images/Hero.png";

const PropertyCard = ({
  image,
  address,
  value,
  bedroom,
  bathroom,
  area,
  status,
}) => {
  return (
    <div className=" flex flex-col justify-between shadow-lg min-w-[295px]   rounded-lg px-3 py-[14px] h-[315px] ">
      <div>
        <div className=" absolute text-white bg-primary w-[56px] h-[26px] text-center text-xs font-semibold rounded-xl">
          {status}
        </div>

        <img src={image} alt="" />
      </div>
      <div>
        <div className=" text-xl font-bold">{value}</div>

        <div className="text-bold text-sm text-grey ">{address}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex justify-center items-center gap-1 w-[83px] bg-[#e9efff]">
          <img className="h-[20px] w-[20px] object-cover" src={bed2} alt="" />

          <div className="">{bedroom}</div>
        </div>
        <div className="flex justify-center items-center gap-1 w-[83px] bg-[#e9efff]">
          <img className="h-[20px] w-[20px] object-cover" src={toilet} alt="" />

          <div className="">{bathroom}</div>
        </div>
        <div className="flex justify-center items-center gap-1 w-[83px] bg-[#e9efff]">
          <img
            className="h-[20px] w-[20px] object-cover"
            src={areaico}
            alt=""
          />

          <div className="">{area}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
