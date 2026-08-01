import React, { useState } from 'react'


import { FaReact } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
const InputBarContainer = () => {

    const [open, setOpen] = useState(false);

    


    const categories = [
      "Technology",
      "Fashion",
      "Books",
      "Gaming",
      "Music"
    ];
    
    
  return (
    <div>
        <div className="inputbarcontainer flex fixed top-3 z-80 py-2 left-50 top-20"> 
  
              <input type="text" className='h-12 w-170 border-1 bg-gray-100 hover:bg-gray-300 transition-colors duration-600 rounded-4xl mt-3 ml-4 pl-3 text-2xl' placeholder='Search Collection...'/>
  
              <div className="relative mt-3 ml-2 ">
  
  
                         <div
                           className="categorybar h-12 w-70 bg-white rounded-4xl border cursor-pointer"
                           onClick={() => setOpen(!open)}
                         >
                           <h1 className="text-[24px] justify-center flex mt-1 font-serif items-center">
                             Browse Categories
         
                               <div
                                 className={`icondown ml-3 transition-transform duration-300 ${
                                   open ? "rotate-180" : ""
                                 }`}
                               >
                                 <FaAnglesDown />
                               </div>
            
                             </h1>
                           </div>
            
            
                           {/* Dropdown */}
                           {open && (
                             <div className="absolute top-14 left-0 w-70 bg-white border rounded-xl shadow-lg z-50">
            
                               {categories.map((category, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 font-serif text-lg hover:bg-gray-200 cursor-pointer"
                        >
                          {category}
                        </div>
                      ))}
            
                    </div>
                  )}
            
            </div>
          </div>
    </div>
  )
}

export default InputBarContainer
