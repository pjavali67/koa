import React from "react";

function FeatureCard() {
  return (
    <>
      <div className="flex  gap-4 gap-y-4 md:flex-row justify-between items-center w-full max-w-[1368px] mx-auto px-4 py-7 lg:py-9">
        <div className="card bg-primary text-primary-content flex-1 flex-grow  max-w-md rounded-lg shadow-xl">
          <div className="card-body">
            <h5 className="card-title text-primary-content mb-2.5">
              KOA Journal
            </h5>
            <p>journal of Karnataka Orthopaedic Association (JKOA).</p>
          </div>
        </div>
        <div className="card bg-primary/20  flex-1 border-primary text-primary border shadow-none">
          <div className="card-body">
            <h5 className="card-title text-primary mb-2.5">
              Important Resources
            </h5>
            <p>KOA Resources database providing references and knowledge. </p>
          </div>
        </div>
        <div className="card border-primary text-primary border bg-transparent shadow-none flex-1">
          <div className="card-body">
            <h5 className="card-title text-primary mb-2.5">Important Links</h5>
            <p>
              List of external links crucial for Members of the KOA Members.
            </p>
          </div>
        </div>
        <div className="card bg-primary text-primary-content flex-1">
          <div className="card-body">
            <h5 className="card-title text-primary-content mb-2.5">
              Fellowships
            </h5>
            <p>List of KOA Fellowships and Supported by KOA.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
