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
  
              <input type="text" className='h-12 w-243 border-1 bg-gray-100 hover:bg-gray-300 transition-colors duration-600 rounded-4xl mt-3 ml-4 pl-3 text-2xl' placeholder='Search Artist'/>
  
              <div className="relative mt-3 ml-2 ">
  
  
                         
            
            </div>
          </div>
    </div>
  )
}

export default InputBarContainer
