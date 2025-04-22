import React from "react";
// import FeatureCard from "../FeatureCard";

function CommitteesList() {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-4 gap-y-4 md:flex-row justify-between items-center w-full max-w-[1368px] mx-auto px-4 py-7 lg:py-9">
        <>
          <div className="card bg-primary text-primary-content flex-1/4 h-60">
            <div className="card-body">
              <h5 className="card-title text-primary-content mb-2.5">
                Ilizarov :
              </h5>

              <ul>
                <li>Dr. Satish Nesari Belgaum</li>
                <li>Dr. Rizwan Ahmed from Mangalore</li>
                <li>Dr. Sheshgiri JSS medical college Mysore.</li>
              </ul>
            </div>
          </div>
          <div className="card   h-60 bg-primary/20  flex-1/4 border-primary text-primary border shadow-none">
            <div className="card-body">
              <h5 className="card-title text-primary mb-2.5">Spine :</h5>
              <ul>
                <li>Dr. Vijay Tubaki Tumkur</li>
                <li>Dr.Vijay Shekarappa</li>
                <li>Dr. Amrithalal</li>
                <li>Dr.Yogesh Pitwa</li>
                <li>Dr Ravi Varma Bangalore</li>
                <li>Dr Vani Ahuja Bangalore</li>
              </ul>
            </div>
          </div>
          <div className="card h-60 border-primary text-primary border bg-transparent shadow-none flex-1/4">
            <div className="card-body">
              <h5 className="card-title text-primary mb-2.5">Paed Ortho:</h5>
              <ul>
                <li>Dr. Varun Shetty Mangalore</li>
                <li>Dr.Naveen Patil Hubli</li>
                <li>Dr. Naveen Bharat Shimoga</li>
                <li>Dr.Harish P Bellary</li>
                <li>Dr. Pooja Mysore</li>
              </ul>
            </div>
          </div>
        </>
        <div className="card h-60  bg-primary text-primary-content flex-1/4">
          <div className="card-body">
            <h5 className="card-title text-primary-content mb-2.5">
              Arthroscopy :
            </h5>
            <ul>
              <li>Dr. Vivek Pandey Manipal</li>
              <li>Dr. Sandeep Naik Bijapur</li>
              <li>Dr. Sandesh Bangalore</li>
              <li>Dr. Sindhu Bangalore</li>
            </ul>
          </div>
        </div>

        <div className="card   h-60 bg-primary/20  flex-1/4 border-primary text-primary border shadow-none">
          <div className="card-body">
            <h5 className="card-title text-primary mb-2.5">Arthroplasty:</h5>
            <ul>
              <li>Dr. Sharath KR Bangalore</li>
              <li>Dr. Shashir Suranagi Murugaraj Shimoga</li>
              <li>Dr. Shivraj Chatrasali Gulbarga</li>
              <li>Dr. Manjunath Yadgir</li>
            </ul>
          </div>
        </div>
        <div className="card h-60 border-primary text-primary border bg-transparent shadow-none flex-1/4">
          <div className="card-body">
            <h5 className="card-title text-primary mb-2.5">Trauma :</h5>
            <ul>
              <li>Dr. Neelam Gowda Mysore</li>
              <li>Dr. Arun KN Raichur</li>
              <li>Dr. Vivek Patil Hubli</li>
              <li>Dr. Harshavardhan HP Hiriyur</li>
              <li>Dr. Girish Vasanad Bagalkot</li>
              <li>Dr. Harshita Bangalore</li>
            </ul>
          </div>
        </div>
        <div className="card bg-primary text-primary-content flex-1/4 h-60">
          <div className="card-body">
            <h5 className="card-title text-primary-content mb-2.5">Hand:</h5>
            <ul>
              <li>Dr. Kishan Rao Bangalore</li>
              <li>Dr. Karuppaiah kumar HOSMAT</li>
              <li>Dr. Madhusudhan Baptist</li>
              <li>Dr. Latheesh Latif Mangalore</li>
            </ul>
          </div>
        </div>
        <div className="card   h-60 bg-primary/20  flex-1/4 border-primary text-primary border shadow-none">
          <div className="card-body">
            <h5 className="card-title text-primary mb-2">Foot and ankle :</h5>
            <ul>
              <li>Dr. Suresh Kumar Bengaluru</li>
              <li>Dr. Ananya Puttaraju Bengaluru</li>
              <li>Dr. Shekar Bengaluru</li>
              <li>Dr. Mhd Ismail Hathiwale Vijayapura</li>
              <li>Dr. Abishek Gumaste Hubli</li>
              <li>Dr. Girish Keri Kalaburgi</li>
              <li>Dr. Krithika Bangalore</li>
            </ul>
          </div>
        </div>
        <div className="card h-60 border-primary text-primary border bg-transparent shadow-none flex-1/4">
          <div className="card-body">
            <h5 className="card-title text-primary mb-2.5">IOnco :</h5>
            <ul>
              <li>Dr. Srimanth Bangalore</li>
              <li>Dr. Suman Byregowda</li>
              <li>Dr. Navneet Kamath Mangalore</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommitteesList;
