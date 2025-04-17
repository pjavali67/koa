"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import TopBarActionLinks from "@/components/TopBarActionLinks";
async function loadFlyonUI() {
  return import("../../node_modules/flyonui/flyonui.js");
  // import("./../../node_modules/flyonui/flyonui.css");
}
function Navbar() {
  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI();
    };

    initFlyonUI();
  }, []);
  return (
    <div>
      <header>
        <nav>
          <div className="bg-cyan-600 w-100% h-16">
            {" "}
            <TopBarActionLinks />
          </div>
        </nav>
        <div className="h-27 max-md:h-[31.25rem]">
          <nav className="navbar rounded-box shadow-base-300/25 shadow-sm h-25">
            <div className="navbar-start   ">
              <span className="flex items-center justify-start gap-2">
                {/* <img src={Logo} alt="KOA Logo" className="h-10 w-10" /> */}
                <Image
                  src="/images/KOA_logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded m-1 mt-2 flex-none"
                />{" "}
                <a
                  className="link text-base-content link-neutral text-xl font-bold no-underline "
                  href="#"
                >
                  Karnataka Orthopaedic Association
                </a>
              </span>
            </div>
            <div className="navbar-center max-md:hidden">
              <ul className="menu menu-horizontal gap-2 p-0 text-base rtl:ml-20">
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                  <button
                    id="dropdown-end"
                    type="button"
                    className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    About us
                    <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-open:opacity-100 hidden w-60"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="nested-dropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Our Message
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Office Bearers 2024-25
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        District Chapters
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Subspecialty Committees
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        KOA Bylaws & Blue Book
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Office Bearers 2023-24
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        History of Orthopaedics
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Past Offices
                      </a>
                    </li>
                    {/* <li className="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start]"></li> */}
                  </ul>
                </li>
                {/* <li>
                  <a href="#">About</a>
                </li> */}
                <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                  <button
                    id="dropdown-end"
                    type="button"
                    className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    Academics
                    <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-open:opacity-100 hidden w-60"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="nested-dropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Acadamic Calendar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fellowship
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Books
                      </a>
                    </li>

                    {/* <li className="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start]"></li> */}
                  </ul>
                </li>
                <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                  <button
                    id="dropdown-end"
                    type="button"
                    className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    News
                    <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-open:opacity-100 hidden w-60"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="nested-dropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Announcements
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        News-2024
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        News-2023
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Archives
                      </a>
                    </li>

                    {/* <li className="dropdown relative [--auto-close:inside] [--offset:10] [--placement:right-start]"></li> */}
                  </ul>
                </li>
                <li>
                  <a href="#">KOA Bulletin</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end items-center gap-4">
              <div className="dropdown relative inline-flex [--placement:bottom] md:hidden">
                <button
                  id="dropdown-default"
                  type="button"
                  className="dropdown-toggle btn btn-text btn-secondary btn-square"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
                  <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
                </button>
                <ul
                  className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-default"
                >
                  <li className="dropdown relative [--auto-close:inside] [--offset:9] [--placement:bottom]">
                    <button
                      id="dropdown-end-2"
                      className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      About us
                      <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                    </button>
                    <ul
                      className="dropdown-menu dropdown-open:opacity-100 hidden w-48"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="nested-dropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Academics
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          News
                        </a>
                      </li>
                      <li className="dropdown relative [--auto-close:inside] [--offset:10] md:[--placement:right-start] [--placement:bottom]">
                        <button
                          id="nested-dropdown-2"
                          className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          aria-label="Dropdown"
                        >
                          KOA Bulletin
                          <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                        </button>
                        <ul
                          className="dropdown-menu dropdown-open:opacity-100 hidden w-48"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="nested-dropdown-2"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Blog
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Advanced
                              <span className="badge badge-sm badge-soft badge-primary rounded-full">
                                Pro
                              </span>
                            </a>
                          </li>
                          <li className="dropdown relative [--auto-close:inside] [--offset:10] md:[--placement:right-start] [--placement:bottom]">
                            <button
                              id="nested-dropdown-2"
                              className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              2024
                              <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                            </button>
                            <ul
                              className="dropdown-menu dropdown-open:opacity-100 hidden w-48"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="nested-dropdown-2"
                            >
                              <li>
                                <a className="dropdown-item" href="#">
                                  news 2024
                                  <span className="badge badge-sm badge-soft badge-primary rounded-full">
                                    news 2023
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  news 2022
                                  <span className="badge badge-sm badge-soft badge-primary rounded-full">
                                    Archives
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  news 2021
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-primary" href="#">
                Login
              </a>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
