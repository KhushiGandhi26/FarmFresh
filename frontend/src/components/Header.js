import React from "react";
import logo from "../assest/logo.png";
const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      <div className="flex items-center h-full justify-between">
        <div className="h-10">
          <img src={logo} className="h-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
