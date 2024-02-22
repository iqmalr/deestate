import { MobileNav } from "@material-tailwind/react";
import React from "react";
import logo from "../icons/logo_deestate.png";
const Navigasi = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="flex flex-col justify-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  lg:gap-6 bg-white lg:bg-transparent">
      <div
        as="li"
        variant="small"
        className="p-1 font-montserrat font-medium text-base text-black"
      >
        <a href="/" className="flex items-center">
          Discover
        </a>
      </div>
      <div
        as="li"
        variant="small"
        className="p-1 font-montserrat font-medium text-base text-black "
      >
        <a href="/destination" className="flex items-center">
          Destination
        </a>
      </div>
      <div
        as="li"
        variant="small"
        className="p-1 font-montserrat font-medium text-base text-black"
      >
        <a href="/about" className="flex items-center">
          About U
        </a>
      </div>
    </ul>
  );

  return (
    <nav className="flex justify-between items-center sticky top-0 z-10 max-w-full rounded-none h-[80px]  px-[20px] lg:px-[100px] py-[1px] bg-slate-600">
      <div>
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="w-[98px] h-[30px] md:w-[140px] md:h-[42px] mr-2"
            alt="Logo Flowbite"
          />
        </a>
      </div>
      <div className="mr-2 hidden lg:block">{navList}</div>
      <button
        variant="gradient"
        size="sm"
        className="hidden lg:inline-block text-sm"
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <span>Contact Us</span>
        </a>
      </button>
      <div
        variant="text"
        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>
      {/* mobile nav start */}
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <button fullWidth variant="gradient" size="sm" className="text-sm">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span>Contact Us</span>
            </a>
          </button>
        </div>
      </MobileNav>
      {/* mobile nav end */}
    </nav>
  );
};

export default Navigasi;
