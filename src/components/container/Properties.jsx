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

          <button
            type="button"
            class="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            See more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
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
