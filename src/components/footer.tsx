import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer bg-blue-950 p-10">
        <aside className="gap-6">
          <div className="flex items-center gap-2 text-xl font-bold  text-white ">
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
                fill="var(--color-primary)"
              />
            </svg> */}
            <span>Karnataka Orthopaedic Association</span>
          </div>
          <p className="text-base-content text-sm  text-white ">
            This community has been established specially for the <br />
            members of the Karnataka Orthopaedic Association.
            <br /> The mission is to foster a high-quality forum for <br />
            academic discussions underlining the Presidential <br /> theme
            ‘Collaborate – Share – Support’.
          </p>
        </aside>
        <nav className="text-base-content ">
          <h6 className="footer-title ext-base-content text-white">
            <span className="text-white">Association</span>
          </h6>
          <a href="#" className="link link-hover text-white ">
            About Us
          </a>
          <a href="#" className="link link-hover text-white ">
            Academics
          </a>
          <a href="#" className="link link-hover ext-base-content text-white">
            KOA Bulletin
          </a>
        </nav>
        <nav className="text-base-content">
          <h6 className="footer-title ext-base-content text-white">
            <span className="text-white">Connect</span>
          </h6>
          <a href="#" className="link link-hover ext-base-content text-white">
            Contact Us
          </a>
          <a href="#" className="link link-hover ext-base-content text-white">
            FaceBook
          </a>
          <a href="#" className="link link-hover ext-base-content text-white">
            YouTube
          </a>
        </nav>
        <nav className="text-base-content">
          <h6 className="footer-title ext-base-content text-white">
            <span className="text-white">Member Stats</span>
          </h6>
          <a href="#" className="link link-hover ext-base-content text-white">
            Life Members: 2059+
          </a>
          <a href="#" className="link link-hover ext-base-content text-white">
            Non Members: 25+
          </a>
        </nav>
      </footer>
      <div>
        <p className="text-base-content text-sm text-white bg-blue-950 py-2 px-10">
          Copyright © 2025 Karnataka Orthopaedic Association. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
