"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TopBarActionLinks from "./TopBarActionLinks";
import { Icon } from "@iconify/react";
async function loadFlyonUI() {
  return import("../../node_modules/flyonui/flyonui.js");
}
function Navbar() {
  const router = useRouter();

  const aboutusClick = () => {
    router.push("/aboutus");
  };
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
          <div className="bg-cyan-600 w-100%  ">
            <TopBarActionLinks />
          </div>
        </nav>
        <div className=" ">
          <nav className="navbar rounded-box shadow-base-300/25 shadow-sm h-20">
            <div className="navbar-start   ">
              <span className="flex items-center justify-start gap-2 hidden">
                <Image
                  src="/images/KOA_logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded m-1 mt-2 flex-none"
                />
                <button
                  className="button text-base-content button-neutral text-xl font-bold no-underline "
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Karnataka Orthopaedic Association
                </button>
              </span>
            </div>
            <div className="navbar-center max-md:hidden">
              <ul className="menu menu-horizontal gap-2 p-0 text-base rtl:ml-20">
                <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                  <button
                    id="dropdown-end"
                    type="button"
                    className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                    onClick={aboutusClick}
                  >
                    KOA Office
                    <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-open:opacity-100 hidden w-60"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="nested-dropdown"
                  >
                    <li>
                      <button
                        onClick={() => {
                          router.push("/ourmessage");
                        }}
                      >
                        Our Message
                      </button>
                      {/* <button className="dropdown-item" href="/ourmessage">
                       
                      </button> */}
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push("/officebearers");
                        }}
                      >
                        Office Bearers
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push("/DistictChapters");
                        }}
                      >
                        District Chapters
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push("/committees");
                        }}
                      >
                        Committees
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push("/pastofficers");
                        }}
                      >
                        Past Officiers
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push("/ByLaws");
                        }}
                      >
                        KOA Bylaws & Blue Book
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          router.push("/koabulletin");
                        }}
                      >
                        KOA Bulletin
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          router.push("/historyofortho");
                        }}
                      >
                        History of Orthopaedics
                      </button>
                    </li>
                  </ul>
                </li>

                <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                  <button
                    id="dropdown-end-1"
                    type="button"
                    className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                    onClick={() => router.push("/academics")}
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
                      <button onClick={() => router.push("/academiccalendar")}>
                        Acadamic Calendar
                      </button>
                    </li>
                    <li>
                      <button onClick={() => router.push("/fellowship")}>
                        Fellowship
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => router.push("/books")}
                      >
                        Books
                      </button>
                    </li>
                  </ul>
                </li>
                <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                  <button
                    type="button"
                    className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                    onClick={() => router.push("/news")}
                  >
                    News
                    {/* <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span> */}
                  </button>
                  {/* <ul
                    className="dropdown-menu dropdown-open:opacity-100 hidden w-60"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="nested-dropdown"
                  >
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => router.push("/announcements")}
                      >
                        Announcements
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => router.push("/news2024")}
                      >
                        News-2024
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => router.push("/news2023")}
                      >
                        News-2023
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => router.push("/archives")}
                      >
                        Archives
                      </button>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <button onClick={() => router.push("/events")}>Events</button>
                </li>

                <li>
                  <button onClick={() => router.push("/blog")}>Blog</button>
                </li>
              </ul>
            </div>
            {/* mobile navbar start here */}
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
                        <button className="dropdown-item">Academics</button>
                      </li>
                      <li>
                        <button className="dropdown-item">News</button>
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
                              id="nested-dropdown-6"
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
              <button className="btn btn-primary hidden">
                Find A Orthopaedician
                <span>
                  <Icon
                    icon="mdi:magnify"
                    className="text-white hover:text-black w-6 h-6"
                  />
                </span>
              </button>
              <button className="btn btn-primary">Join KOA</button>
              <button className="btn btn-primary">Login</button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
