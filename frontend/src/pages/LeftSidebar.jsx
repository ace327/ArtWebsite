import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"

const LeftSidebar = () => {
  const [boxHeight, setBoxHeight] = useState(320);
  const [sidebarHeight, setSidebarHeight] = useState(350);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (expanded && scroll > 30) {
        setExpanded(false);
      }

      const newBoxHeight = Math.max(80, 320 - scroll * 0.6);
      setBoxHeight(newBoxHeight);

      const newSidebarHeight = Math.max(350, 350 - scroll * 0.8);
      setSidebarHeight(newSidebarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [expanded]);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/explore", label: "Explore" },
    { to: "/Artist", label: "Artist" },
    { to: "/Nail Art", label: "Nail Art" },
    { to: "/About", label: "About" },
    { to: "/Contact", label: "Contact" },
  ];

  const base =
    "text-center rounded-[22px] font-serif bn31 block transition-all duration-200";

  return (
    <div>
      <div className="sidebarcontainer fixed left-2 top-24 z-100">
        <div className="side1 flex h-auto">
          <div
            className="slidebar bordergradientclass bg-black border-2 w-50 rounded-4xl shdw transition-all duration-75 overflow-hidden"
            style={{ height: `${sidebarHeight}px` }}
          >
            <ul className="flex flex-col ml-3.5 mt-2 gap-1.5">
              {links.map(({ to, label }) => (
                <li key={to}>
                 <NavLink
  to={to}
  className={({ isActive }) =>
    `bn31 ${isActive ? "active" : ""}`
  }
>
  <span className="bn31span">{label}</span>
</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar