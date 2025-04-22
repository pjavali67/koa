import React from "react";
//import PageLayout from "@/utils/Pagelayout";
import Officebearers from "@/components/offiebearers/Officebearers";
function OfficeBearersPage() {
  return (
    <>
      {/* <div className="mt-2">
        <PageLayout title="Office Bearers" description="" />{" "}
      </div> */}
      <h1 className="text-xl font-bold mt-10 ml-5 mb-10">
        KOA Office Berarers year wise{" "}
      </h1>
      <div className=" ml-20 justify-center item-center relative w-full h-auto ">
        <nav
          className="tabs tabs-bordered mb-10"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            type="button"
            className="tab active-tab:tab-active active text-bold text-2xl"
            id="tabs-basic-item-1"
            data-tab="#tabs-basic-1"
            aria-controls="tabs-basic-1"
            role="tab"
            aria-selected="true"
          >
            Office Berarers 2024-2025
          </button>
          <button
            type="button"
            className="tab active-tab:tab-active text-bold text-2xl"
            id="tabs-basic-item-2"
            data-tab="#tabs-basic-2"
            aria-controls="tabs-basic-2"
            role="tab"
            aria-selected="false"
          >
            Office Berarers 2024-2023
          </button>
          <button
            type="button"
            className="tab active-tab:tab-active text-bold text-2xl"
            id="tabs-basic-item-3"
            data-tab="#tabs-basic-3"
            aria-controls="tabs-basic-3"
            role="tab"
            aria-selected="false"
          >
            Office Berarers 2023-2022
          </button>
        </nav>

        <div className="mt-3 mr-20">
          <div
            id="tabs-basic-1"
            role="tabpanel"
            aria-labelledby="tabs-basic-item-1"
            className="flex flex-col items-center justify-center w-full h-auto"
          >
            <p>one</p>
            <div>
              <Officebearers />
            </div>
          </div>
          <div
            id="tabs-basic-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="tabs-basic-item-2"
          >
            <p>two</p>
          </div>
          <div
            id="tabs-basic-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="tabs-basic-item-3"
          >
            <p>three</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfficeBearersPage;
