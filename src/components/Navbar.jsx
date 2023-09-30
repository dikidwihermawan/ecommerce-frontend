import { IconShoppingCart, IconSearch } from "@tabler/icons-react";
import { NavLink, useNavigate } from "react-router-dom";
import { authenticated } from "../store";
import { useRecoilState } from "recoil";
import { useState } from "react";
import axios from "axios";

export default function Navbar() {
  const [auth, setAuth] = useRecoilState(authenticated);
  const [dropdown, setDropdown] = useState(true);

  const logout = async () => {
    try {
      await axios.post("logout");
      setAuth({ check: false });
      setDropdown(true);
    } catch (e) {
      console.log(e);
    }
  };

  function show_dropdown() {
    setDropdown(!dropdown);
  }

  return (
    <div className="pb-16">
      <nav className="fixed w-full bg-white border border-gray-100 dark:bg-gray-900 font-sans z-10">
        <div className="max-w-screen flex items-center justify-between px-10 py-2">
          <a href="/" className="flex items-center">
            <span className="self-center font-semibold whitespace-nowrap dark:text-white md:text-lg lg:text-xl">
              NewbieORG
            </span>
          </a>
          <div>
            <form
              action="#"
              id="form"
              className="invisible flex items-center lg:visible"
            >
              <div>
                <select
                  defaultValue={"ind"}
                  name="selectCountry"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-full focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="ind">Indonesia</option>
                  <option value="us">United States</option>
                  <option value="eng">England</option>
                  <option value="gmn">Germany</option>
                </select>
              </div>
              <input
                onKeyDown={(e) => {
                  console.log(e.target.value);
                }}
                type="search"
                name="search"
                id="search"
                className="border border-gray-300 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 w-full lg:w-[500px]"
              />
              <button
                type="submit"
                name="btn_search"
                id="btn_search"
                className="border border-gray-300 rounded-r-full flex items-center px-2 w-full lg:w-[100px] h-[42px] gap-x-2"
              >
                <IconSearch className="stroke-1" />
                <span className="text-xs">Search</span>
              </button>
            </form>
          </div>
          {auth.check ? (
            <div>
              <button
                data-collapse-toggle="navbar-dropdown"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-dropdown"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-dropdown"
              >
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://i.pravatar.cc/30"
                        className="rounded-full lg:ml-0 w-{150} h-{150} border border-grey-100"
                        alt={auth.user.name}
                      />
                      <button
                        onClick={show_dropdown}
                        id="dropdownNavbarLink"
                        data-dropdown-toggle="dropdownNavbar"
                        className="flex items-center justify-between w-full text-sm py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                      >
                        {auth.user.name}
                        <svg
                          className="w-2.5 h-2.5 ml-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Dropdown menu */}
                    <div
                      id="dropdownNavbar"
                      className={`${
                        dropdown ? "hidden" : ""
                      } z-10 fixed font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <button
                          onClick={logout}
                          className="block w-full px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center order-2">
              <NavLink
                to="/cart"
                className="text-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 invisible lg:visible"
              >
                <IconShoppingCart />
              </NavLink>
              <div className="flex place-content-center space-x-2 invisible lg:visible">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "black" : "black",
                    };
                  }}
                  to="/login"
                  className="border border-blue-600 bg-transparent hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "black" : "black",
                    };
                  }}
                  to="/register"
                  className="border border-blue-600 bg-transparent hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign Up
                </NavLink>
              </div>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 mr-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
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
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
