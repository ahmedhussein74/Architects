import React, { useState } from "react";

const Nav = () => {
  const [view, setView] = useState(false);

  const changeHeight = () => {
    if (view) {
      setView(false);
      document.querySelector("nav").style.height = "56px";
    } else {
      setView(true);
      document.querySelector("nav").style.height = "280px";
    }
  };
  return (
    <nav className="h-14 px-3 flex justify-between flex-wrap shadow-lg overflow-hidden">
      <header className="h-14 text-2xl md:text-3xl flex items-center">
        <span className="font-bold mr-2 text-sky-500">BR</span>
        Architects
      </header>
      <i
        onClick={changeHeight}
        className="fa-solid fa-bars h-14 block md:hidden text-xl flex items-center text-sky-500"
      ></i>
      <aside className="w-full md:w-1/2 text-xl flex justify-around flex-wrap items-center">
        <a className="w-full md:w-fit h-14 flex items-center" href="">
          Home
        </a>
        <a className="w-full md:w-fit h-14 flex items-center" href="">
          Projects
        </a>
        <a className="w-full md:w-fit h-14 flex items-center" href="">
          About
        </a>
        <a className="w-full md:w-fit h-14 flex items-center" href="">
          Contact
        </a>
      </aside>
    </nav>
  );
};

export default Nav;
