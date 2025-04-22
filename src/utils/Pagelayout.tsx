import React from "react";
type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};
function PageLayout({ children, description, title }: Props) {
  return (
    <div>
      <header className="p-15 flex justify-start items-center text-white font-border-l-dark-500  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <span className="text-4xl underline-transparent border-b-2 border-solid border--600">
          {title}
        </span>
      </header>
      <main>{children}</main>
      <footer className="hidden">
        <p>{description}</p>
      </footer>
    </div>
  );
}

export default PageLayout;
