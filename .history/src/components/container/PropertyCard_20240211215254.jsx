import React from "react";
import bed from "../../assets/icons/bed-ico.png";
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
    <div className=" flex flex-col justify-between shadow-lg min-w-[295px]  bg-green-100 rounded-lg px-3 py-[14px] h-[315px] ">
      <div>
        <div className=" absolute text-white bg-primary w-[56px] h-[26px] text-center rounded-xl">
          {status}
        </div>

        <img src={image} alt="" />
      </div>
      <div>
        <div className=" text-xl font-bold">{value}</div>

        <div className="text-bold text-sm text-grey ">{address}</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex justify-center w-[83px] bg-green-600">
          <img className="h-[20px]" src={bed} alt="" />

          <div className="">{bedroom}</div>
        </div>
        <div className="flex justify-center w-[83px] bg-green-600">
          <img className="" src={toilet} alt="" />

          <div className="">{bathroom}</div>
        </div>
        <div className="flex justify-center w-[83px] bg-green-600">
          <img className="h-[20px] " src={areaico} alt="" />

          <div className="">{area}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
