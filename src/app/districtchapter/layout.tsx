import React from "react";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="p-15 flex justify-start items-center text-white font-border-l-dark-500  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <span className="text-4xl underline-transparent border-b-2 border-solid border--600">
          About Us
        </span>
      </header>
      <main>{children}</main>
      <footer className="hidden">
        <p>Sub-Page Footer</p>
      </footer>
    </div>
  );
}

export default PageLayout;
