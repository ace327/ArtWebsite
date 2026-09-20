import React from 'react'
import { Link } from "react-router-dom"

const WorkShop = () => {
  return (
    
      <div className="mainContainer">

        <div className="container1 h-170 w-379 bg-gray-200  left-55 top-12 relative flex">





        <div className="boxes h-180  bg-gray-200 ">    
          <div className="barlivecompition h-9 w-400 border-2 bg-gray-200 border-black relative right-64 mt-7 justify-center flex">
          <h1 className="font-germania text-black text-[25px] mr-20">
            WorkShop
          </h1>
        </div>

          <div className="box1 h-67 w-360 mt-4  rounded-3xl bg-gray-200 flex">
            <div className="image h-57 w-88 top-5 relative rounded-l-3xl bg-gray-600   z-5">
              <div className="acralic rounded-l-2xl"></div>
            </div>
            <div className="bardown rounded-2xl bg-gray-400"> 


              <Link className="" to="/ProfilePage" >
              
              <div className="acralic h-13 w-153 rounded-2xl bg-gray-400 relative z-2">  


                <div className="bardown h-15 w-153 rounded-b-2xl bg-gray-700 top-52 relative">


                  <div className="acralic">
                    <h1 className=""></h1>
                  </div>


                <div className="profilename justify-self-end-safe ml-30 text-white">
                  <h1 className="text-2xl">Elon Musk</h1>
                </div>


                  <div className="profileimage h-20 w-20 bg-blue-400 justify-self-end rounded-[22px] bottom-2 left-4 relative">

                    <img className="rounded-[22px]" src="https://hips.hearstapps.com/hmg-prod/images/white-house-senior-advisor-elon-musk-walks-to-the-white-news-photo-1745508714.pjpeg?crop=0.670xw:1.00xh;0.187xw,0&resize=1200:*" alt="" srcset="" />


                  </div>
                </div>
                
                </div> 
              </Link>

               
            </div>
          </div>


        {/* <div className="filterBox h-70 w-70 bg-amber-300 mt-78 ml-7">

        </div> */}


      



        </div>
      </div>
    </div>
  )
}

export default WorkShop
