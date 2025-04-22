import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="footer bg-blue-950 p-10">
        <aside className="gap-6">
          <div className="flex items-center gap-2 text-xl font-bold  text-white ">
            <span>Karnataka Orthopaedic Association</span>
          </div>
          <p className=" text-sm  text-white ">
            This community has been established specially for the <br />
            members of the Karnataka Orthopaedic Association.
            <br /> The mission is to foster a high-quality forum for <br />
            academic discussions underlining the Presidential <br /> theme
            ‘Collaborate – Share – Support’.
          </p>
        </aside>
        <nav className="text-base-content ">
          <h6 className="footer-title ext-base-content text-white">
            <span className="text-white footerlink">Association</span>
          </h6>
          <Link href="/aboutus" className="link link-hover  footerlink">
            About Us
          </Link>
          <Link href="/academics" className="link link-hover text-white ">
            Academics
          </Link>
          <Link
            href="#"
            className="link link-hover ext-base-content text-white"
          >
            KOA Bulletin
          </Link>
        </nav>
        <nav className="text-base-content">
          <h6 className="footer-title ext-base-content text-white">
            <span className="text-white">Connect</span>
          </h6>
          <Link
            href="#"
            className="link link-hover ext-base-content text-white"
          >
            Contact Us
          </Link>
          <Link
            href="#"
            className="link link-hover ext-base-content text-white"
          >
            Find A Orthopaedician
          </Link>
          <a
            href="https://www.facebook.com/groups/2952203365056169/"
            className="link link-hover ext-base-content text-white"
            target="_blank"
          >
            FaceBook
          </a>
          <a
            href="https://www.youtube.com/channel/UCJgvDfSVZ09miYAEmUIzfxQ"
            target="_blank"
            className="link link-hover ext-base-content text-white"
          >
            YouTube
          </a>
        </nav>
        <nav className="text-base-content">
          <h6 className="footer-title ext-base-content text-white">
            <span className="text-white">Member Stats</span>
          </h6>
          <span className="link link-hover ext-base-content text-white">
            Life Members: 2059+
          </span>
          <span className="link link-hover ext-base-content text-white">
            Non Members: 25+
          </span>
        </nav>
      </footer>
      <div>
        <p className="text-sm text-white bg-blue-950 py-2 px-10">
          Copyright © {new Date().getFullYear()} Karnataka Orthopaedic
          Association. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
