import React from "react";
import { propertyDetails } from "../../data/data";
import rumah from "../../icons/home.png";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div
      className="mx-[20px] md:mx-[100px] bg-pink-400 mb-[85px]"
      id="properties"
    >
      <div className="flex justify-between items-center h-[72px] bg-red-500">
        <div className="flex justify-between items-center bg-green-600">
          <img className="w-[64px] h-[59px]" src={rumah} alt="" />
          <div>
            <div className="text-3xl font-bold  ">Stunning Property</div>
            <div className="text-grey text-base font-normal ">
              With various types of property and competitive prices
            </div>
          </div>
        </div>
        <div className="hidden md:block">tombol</div>
      </div>
      <div className="mt-12 overflow-x-hidden  relative bg-amber-300">
        <div className="flex w-full bg-blue-400 gap-8  animate-slide">
          {propertyDetails.map((propertyDetail) => {
            return (
              <PropertyCard key={propertyDetails.id} {...propertyDetail} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Properties;
