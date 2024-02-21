import React from "react";
import rumah from "../../assets/icons/home.png";
import { propertyDetails } from "../../data/data2";
// import rumah from "../../icons/home.png";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div className=" mb-10">
      <div
        className="mx-[20px] md:mx-[100px] mb-[85px] bg-blue-700"
        id="properties"
      >
        <div className="flex justify-between items-center h-[72px] bg-red-500 ">
          <div className="flex flex-col md:flex-row justify-between items-start bg-amber-400">
            <img className="w-[64px] h-[59px]" src={rumah} alt="" />
            <div>
              <div className="text-3xl font-bold  ">Stunning Property</div>
              <div className="text-grey text-base font-normal ">
                With various types of property and competitive prices
              </div>
            </div>
          </div>

          <button className="">
            <span>See More</span>
          </button>
        </div>
        <div className="mt-12 overflow-x-hidden bg-teal-500 relative ">
          <div className="flex w-full  gap-8  animate-slide">
            {propertyDetails.map((propertyDetail) => {
              return (
                <PropertyCard key={propertyDetails.id} {...propertyDetail} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
