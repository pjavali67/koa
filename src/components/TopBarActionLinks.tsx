"use client";
import React from "react";
//import { Button } from "./ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
function TopBarActionLinks() {
  function faceBookHandler() {
    window.open("https://www.facebook.com/groups/2952203365056169/", "_blank");
  }
  function youTubeHandler() {
    window.open(
      "https://www.youtube.com/channel/UCJgvDfSVZ09miYAEmUIzfxQ",
      "_blank"
    );
  }

  return (
    <div className="topbar-action-links mb-1  flex flex-row gap-4 justify-center items-center w-full h-[10%] font-bold   shadow-xl stroke-current" >
      <div>
        <div className="flex flex-row gap-2 items-center justify-start ml-10 bg-white w-full rounded-md h-auto  shadow-xl">
          <span className="flex  items-center justify-start gap-2 bg-light-50">
            <Image
              src="/images/KOA_logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded m-1 mt-2 flex-none"
            />
            <Link
              className="link text-base-content link-neutral text-xl font-bold no-underline  bg-light-50 w-full "
              href="/"
            >
              <span>Karnataka Orthopaedic Association</span>
            </Link>
          </span>
        </div>
        <span className="text-lg mr-3 visible hidden">Events</span>
        <span className="text-lg mr-3 visible hidden">Jobs</span>
        <span className="text-lg visible hidden">Contact Us</span>
      </div>
      <div className="flex-1 w-auto bg-light-50"></div>
      <div className="flex-1">
        <span className="text-md flex items-center justify-center flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col visibel hidden ">



          <span className="flex text-m3">
            {" "}
            <Icon
              icon="mdi:email"
              className="text-white hover:text-black w-6 h-6 mr-1"
            />
            drharishmurthysgkoa@gmail.com
          </span>
        </span>
      </div>
      <div className="flex-1 mr-5">
        <span className="flex  items-center justify-center flex-row gap-4 xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col ">
          <Link className="btn btn-primary bg-indigo-900 border-none  " href="/find-a-doctor" >
            Find A Orthopaedician
            <span>
              <Icon
                icon="mdi:magnify"
                className="text-white hover:text-black w-6 h-6"
              />
            </span>
          </Link>
          <Icon
            icon="mdi:facebook"
            className="text-white hover:text-black w-6 h-6"
            onClick={faceBookHandler}
          />
          <Icon
            icon="mdi:youtube"
            className="text-white hover:text-black w-6 h-6"
            onClick={youTubeHandler}
          />
        </span>
        <span className="icon-[tabler--youtube]"></span>
      </div>
    </div>
  );
}

export default TopBarActionLinks;
