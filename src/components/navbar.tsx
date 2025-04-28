"use client";
import React, { useEffect } from "react";
//import { useRouter } from "next/navigation";
import Image from "next/image";
import TopBarActionLinks from "./TopBarActionLinks";
import { Icon } from "@iconify/react";
import Link from "next/link";
async function loadFlyonUI() {
  return import("../../node_modules/flyonui/flyonui.js");
}
function Navbar() {
  // const router = useRouter();

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
                <Link
                  className="Link text-base-content Link-neutral text-xl font-bold no-underline "
                  href="/"
                >
                  Karnataka Orthopaedic Association
                </Link>
              </span>
            </div>
            <div className="navbar-center max-md:hidden">
              <ul className="menu menu-horizontal gap-2 p-0 text-base rtl:ml-20">
                <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                  <Link
                    id="dropdown-end"
                    type="Link"
                    className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                    href={"/aboutus"}
                  >
                    KOA Office
                    <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-open:opacity-100 hidden w-60"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="nested-dropdown"
                  >
                    <li>
                      <Link href={"/ourmessage"}>Our Message</Link>
                    </li>
                    <li>
                      <Link href={"/officebearers"}>Office Bearers</Link>
                    </li>
                    <li>
                      <Link href={"/districtchapter"}>District Chapters</Link>
                    </li>
                    <li>
                      <Link href={"/committees"}>Committees</Link>
                    </li>
                    <li>
                      <Link href={"/pastofficers"}>Past Officiers</Link>
                    </li>
                    <li>
                      <Link href={"/bylaws-bluebook"}>KOA Bylaws & Blue Book</Link>
                    </li>
                    <li>
                      <Link href={"/koabulletin"}>KOA Bulletin</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={"/historyofortho"}>
                        History of Orthopaedics
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                  <Link
                    id="dropdown-end-1"
                    type="Link"
                    className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                    href={"/academics"}
                  >
                    Academics
                    <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-open:opacity-100 hidden w-60"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="nested-dropdown"
                  >
                    <li>
                      <Link href={"/academiccalendar"}>Acadamic Calendar</Link>
                    </li>
                    <li>
                      <Link href={"/fellowship"}>Fellowship</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={"/books"}>
                        Books
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                  <Link
                    type="Link"
                    className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                    href={"/news"}
                  >
                    News
                  </Link>
                  {/* <ul
                    className="dropdown-menu dropdown-open:opacity-100 hidden w-60"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="nested-dropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => router.push("/announcements")}
                      >
                        Announcements
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => router.push("/news2024")}
                      >
                        News-2024
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => router.push("/news2023")}
                      >
                        News-2023
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        onClick={() => router.push("/archives")}
                      >
                        Archives
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link href={"/events"}>Events</Link>
                </li>

                <li>
                  <Link href={"/blog"}>Blog</Link>
                </li>
              </ul>
            </div>
            {/* mobile navbar start here */}
            <div className="navbar-end items-center gap-4">
              <div className="dropdown relative inline-flex [--placement:bottom] md:hidden">
                <Link
                  id="dropdown-default"
                  type="Link"
                  className="dropdown-toggle btn btn-text btn-secondary btn-square"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                  href={"#"}
                >
                  <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
                  <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
                </Link>
                <ul
                  className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-default"
                >
                  <li className="dropdown relative [--auto-close:inside] [--offset:9] [--placement:bottom]">
                    <Link
                      id="dropdown-end-2"
                      className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                      href={"#"}
                    >
                      About us
                      <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                    </Link>
                    <ul
                      className="dropdown-menu dropdown-open:opacity-100 hidden w-48"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="nested-dropdown"
                    >
                      <li>
                        <Link className="dropdown-item " href={"#"}>
                          Academics
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href={"#"}>
                          News
                        </Link>
                      </li>
                      <li className="dropdown relative [--auto-close:inside] [--offset:10] md:[--placement:right-start] [--placement:bottom]">
                        <Link
                          id="nested-dropdown-2"
                          className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          href={"/koabulletin"}
                        >
                          KOA Bulletin
                          <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                        </Link>
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
                            <Link
                              id="nested-dropdown-6"
                              className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                              href={"#"}
                            >
                              2024
                              <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                            </Link>
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
              <Link className="btn btn-primary hidden" href={"#"}>
                Find A Orthopaedician
                <span>
                  <Icon
                    icon="mdi:magnify"
                    className="text-white hover:text-black w-6 h-6"
                  />
                </span>
              </Link>
              <Link className="btn btn-primary" href={"#"}>
                Join KOA
              </Link>
              <Link className="btn btn-primary" href={"/login"}>
                Login
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
