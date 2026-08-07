import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const LeftSidebar = () => {



    

const [boxHeight, setBoxHeight] = useState(320);
 
  
  const [sidebarHeight, setSidebarHeight] = useState(620);

    const [expanded, setExpanded] = useState(false);


  


  



    useEffect(() => {
  const handleScroll = () => {
  const scroll = window.scrollY;

  if (expanded && scroll > 30) {
    setExpanded(false);
  }

  const newBoxHeight = Math.max(80, 320 - scroll * 0.6);
  setBoxHeight(newBoxHeight);

  const newSidebarHeight = Math.max(320, 620 - scroll * 0.8);
  setSidebarHeight(newSidebarHeight);
};

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [expanded]);

  return (
    <div>
       <div className="sidebarcontainer fixed left-2 top-24 z-100">
    <div className="side1 flex h-auto">
      <div
        className="slidebar bordergradientclass bg-black border-2 w-50 rounded-4xl shdw transition-all duration-75 overflow-hidden"
        style={{ height: `${sidebarHeight}px` }}
      >
        <ul className="flex flex-col ml-3.5 mt-2 gap-1.5">

      <Link to="/home">
      
          <button1 className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31 cursor-pointer">
            <span className='bn31span'>Home</span>
          </button1>
      </Link>
          <Link to="/Artist"><li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31"><span className='bn31span'>Artist</span></li></Link>
          <Link to="/WorkShop"><li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31"><span className='bn31span'>WorkShop</span></li></Link>
          <Link to="About"><li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31"><span className='bn31span'>About</span></li></Link>
          <Link to="Contact"><li className="h-12 w-42 bg-blue-200 text-center rounded-[22px] text-[20px] pt-2 font-serif bn31"><span className='bn31span'>Contact</span></li></Link>


         
        </ul>
      </div>
    </div>
  </div>
    </div>
  )
}

export default LeftSidebar
