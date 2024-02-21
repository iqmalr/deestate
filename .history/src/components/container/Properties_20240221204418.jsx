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
          {/* border-radius: 4px; background-color: #5ca1e1; border: none; color:
          #fff; text-align: center; font-size: 32px; padding: 16px; width:
          220px; transition: all 0.5s; cursor: pointer; margin: 36px;
          box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7); */}
          {/* fix hidden md:block text-white bg-blue-700 hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
          rounded-lg text-sm px-5 py-2.5 text-center items-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 */}
          <button
            type="button"
            class="relative rounded-md bg-primary border-none transition-all p-4 m-2 "
          >
            <span>See more</span>
          </button>
          <button class="relative inline-block transition-all duration-500 transform border-none bg-blue-500 hover:bg-blue-600 text-white text-center p-4  cursor-pointer m-8 shadow-md hover:pl-8 hover:pr-24 group">
            See more
            <span class="absolute opacity-0 top-1/2 right-[-20px] transform -translate-y-1/2 transition duration-500 group-hover:opacity-1 group-hover:right-10">
              »
            </span>
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
