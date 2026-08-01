import img1 from "../assets/SmartSelect_20260728_223916_Google.jpg";
import img2 from "../assets/SmartSelect_20260728_223916_Google.jpg";
import img3 from "../assets/SmartSelect_20260728_223916_Google.jpg";
import img4 from "../assets/SmartSelect_20260728_223916_Google.jpg";
import img5 from '../assets/d002e257349aa40282691f4fd0ac2c6f.jpg.jpeg'
import React, { useState, useEffect } from "react";

const RightBox = () => {


    const [boxHeight, setBoxHeight] = useState(320);

    const [expanded, setExpanded] = useState(false);
    
const collapsed = boxHeight <= 120 && !expanded;


  const currentHeight = expanded ? 320 : boxHeight;

  const cards = [
  { image: img1, title: "Live Compitition" },
  { image: img2, title: "Digital Arts" },
  { image: img3, title: "Collabiration" },
  { image: img4, title: "Literature" },
];
                    useEffect(() => {
  const handleScroll = () => {
    const scroll = window.scrollY;

    if (expanded && scroll > 30) {
      setExpanded(false);
    }

    const newBoxHeight = Math.max(80, 320 - scroll * 0.6);
    setBoxHeight(newBoxHeight);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [expanded]);

  return (
    <div>
      <div
    onClick={() => { if (collapsed) setExpanded(true); }}
    className={`bg-black rounded-[60px] fixed right-2 top-24 z-100 overflow-hidden transition-all duration-300 w-80 ${
      collapsed ? "cursor-pointer" : ""
    }`}
    style={{ height: `${currentHeight}px` }}
  >
    <div className={`h-full transition-all duration-300 ${collapsed ? "flex items-center justify-evenly" : "grid grid-cols-2 place-items-center gap-4 p-5"}`}>
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col items-center transition-all duration-300">
           <img src={card.image} alt={card.title} className={`object-cover rounded-2xl transition-all duration-300 ${collapsed ? "w-12 h-12" : "w-24 h-24"}`} />
          <span className={`mt-2 text-white text-sm font-serif transition-all duration-300 ${collapsed ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}`}>
            {card.title}
          </span>
        </div>
      ))}
    </div>
  </div>

    </div>
  )
}

export default RightBox
