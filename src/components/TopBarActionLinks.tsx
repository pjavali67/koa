"use client";
import React from "react";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";

function TopBarActionLinks() {
  return (
    <div className="topbar-action-links flex flex-row gap-4 justify-center items-center w-full h-[10%] text-white font-bold  pt-8">
      <div className="flex flex-row gap-2 flex-1 ml-20 justify-start items-center">
        <span className="text-lg mr-3">Events</span>
        <span className="text-lg mr-3">Jobs</span>
        <span className="text-lg">Contact Us</span>
      </div>
      <div className="flex-1">
        <span className="text-md flex items-center justify-center flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col ">
          <Icon
            icon="mdi:phone"
            className="text-white hover:text-black w-6 h-6 "
          />
          <span> +91 9880765855</span>

          <span className="flex text-md ml-5">
            {" "}
            <Icon
              icon="mdi:email"
              className="text-white hover:text-black w-6 h-6 mr-1"
            />
            drharishmurthysgkoa@gmail.com
          </span>
        </span>
      </div>
      <div className="flex-1">
        <span className="flex  items-center justify-center flex-row gap-4 xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col ">
          <Button variant={"darkblue"}>Join KOA</Button>
          <Icon
            icon="mdi:facebook"
            className="text-white hover:text-black w-6 h-6"
          />
          <Icon
            icon="mdi:youtube"
            className="text-white hover:text-black w-6 h-6"
          />
        </span>
        <span className="icon-[tabler--youtube]"></span>
      </div>
    </div>
  );
}

export default TopBarActionLinks;
