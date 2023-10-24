import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const links = [
    {
      key: "00",
      adress: "/",
      name: "HOME",
    },
    {
      key: "01",
      adress: "/destination",
      name: "DESTINATION",
    },
    {
      key: "02",
      adress: "/crew",
      name: "CREW",
    },
    {
      key: "03",
      adress: "/technology",
      name: "TECHNOLOGY",
    },
  ];

  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 ml-[24px] flex justify-between md:ml-[55px] md:items-center md:pt-[40px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        className="mt-[24px] h-[40px] w-[40px] md:mt-0 md:h-[48px] md:w-[48px]"
      >
        <circle cx="24" cy="24" r="24" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z"
          fill="#0B0D17"
        />
      </svg>
      <button
        type="button"
        className={` text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mt-[24px] inline-flex h-10 w-10 items-center justify-center rounded-md p-2 text-sm focus:outline-none focus:ring-2 md:hidden ${
          navbar && "hidden"
        }`}
        onClick={() => setNavbar(!navbar)}
      >
        <svg
          className="h-5 w-5 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {navbar ? (
        <ul className="relative flex h-screen w-3/5 flex-col gap-[32px] bg-white bg-opacity-[0.04] pl-[32px] pt-[118px] backdrop-blur-[40px] transition-all duration-75  ease-in-out">
          {links.map((link) => (
            <li
              key={link.key}
              className="font-secondary tracking-[2.7px] text-white"
            >
              <span className="pr-[11px] font-bold">{link.key}</span>
              <NavLink
                className={` font-normal uppercase text-white`}
                to={link.adress}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute right-[15px] top-5 h-6 w-6 text-white md:hidden "
            onClick={() => setNavbar(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </ul>
      ) : (
        <ul className="relative hidden h-max gap-[50px] bg-white bg-opacity-[0.04] px-[125px] py-[35px] backdrop-blur-[40px] transition-all duration-75 ease-in-out before:absolute before:left-[-16rem] before:top-1/2  before:block before:h-[1px] before:w-80 before:bg-white before:bg-opacity-20 md:flex ">
          {links.map((link) => (
            <li
              key={link.key}
              className="hover:after:bg-opacity-50 relative font-secondary tracking-[2.7px] text-white transition-all delay-75 ease-in-out hover:after:absolute hover:after:left-0 hover:after:top-[55px] hover:after:h-[3px] hover:after:w-full hover:after:bg-white"
            >
              <span className="pr-[11px] font-bold">{link.key}</span>
              <NavLink
                to={link.adress}
                className={({ isActive }) =>
                  isActive
                    ? "after:absolute  after:left-0 after:top-[55px] after:h-[3px] after:w-full after:bg-white"
                    : ""
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
