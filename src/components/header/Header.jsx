import React from "react";
import logo from "../../assets/logo.svg";
import logo1 from "../../assets/logo1.svg";
import { LINKS } from "../../static";

function Header() {
  const linkItems = LINKS.map((link) => (
    <li
      className="relative cursor-pointer before:cotent before:absolute before:h-[2px] before:w-0 before:top-8 before:left-0 before:bg-[#2E4E92] before:ease-linear before:duration-500 hover:text-[#2E4E92] hover:before:w-full"
      key={link.id}
    >
      {link.link}
    </li>
  ));
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container py-4 mx-auto">
          <div className="navbar__block flex items-center justify-between">
            <div className="img__block relative">
              <img src={logo} alt="" />
              <img className="absolute top-2 left-1.5" src={logo1} alt="" />
            </div>
            <ul className="navbar__collection flex gap-10 text-lg text-[#8F8A99]">
              {linkItems}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
