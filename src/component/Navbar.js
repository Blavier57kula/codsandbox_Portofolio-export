import React, { useEffect, useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const menulinks = [
    { name: "HOME", link: "#Home" },
    { name: "APROPOS", link: "#Apropos" },
    { name: "COMPETENCE", link: "#Competence" },
    { name: "HIREME", link: "#Hireme" },
    { name: "PROJET", link: "#Projt" },
    { name: "CONTACT", link: "#Contact" }
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.qurySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "md:bg-whie text-blue-900" : "text-white"
      }`}
    >
      <div className=" flex items-center justify-between">
        <div className="mx-6">
          <h1 className="text-4xl uppercase font-bold">
            bl<span className="text-blue-600">avi</span>er
          </h1>
        </div>
        <div className="text-blue-600 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full">
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menulinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-blue-800">
                <a href={menu?.link}>{menu?.name} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
