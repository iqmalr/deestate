import React from "react";
import rumah from "../../assets/icons/home.png";
import { propertyDetails } from "../../data/data2";
// import rumah from "../../icons/home.png";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div className=" mb-10">
      <div className="mx-[20px] md:mx-[100px] mb-[85px] " id="properties">
        <div className="flex justify-between items-center h-[72px] ">
          <div className="flex flex-col md:flex-row justify-between items-start ">
            <img className="w-[64px] h-[59px]" src={rumah} alt="" />
            <div>
              <div className="text-3xl font-bold  ">Stunning Property</div>
              <div className="text-grey text-base font-normal ">
                With various types of property and competitive prices
              </div>
            </div>
          </div>

          <button className="rounded-md relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600  hover:before:border-[25px]">
            <span className="relative z-10">See More</span>
          </button>
          {/* <Button /> */}
        </div>
        <div className="mt-12 p-4 overflow-x-hidden relative rounded-lg shadow-lg ">
          <div className="flex w-full  gap-8  animate-slide">
            {propertyDetails.map((propertyDetail) => {
              return (
                <PropertyCard key={propertyDetail.id} {...propertyDetail} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
