  import React, { useState, useEffect } from 'react'
  import { FaReact } from "react-icons/fa";
  import { FaAnglesDown } from "react-icons/fa6";
  import heroImage from "./assets/5cb7852a6cd7a5b4428a74ddecdaa2ae.jpg.jpeg";
  import img1 from "./assets/SmartSelect_20260728_223916_Google.jpg";
  import img2 from "./assets/SmartSelect_20260728_223916_Google.jpg";
  import img3 from "./assets/SmartSelect_20260728_223916_Google.jpg";
  import img4 from "./assets/SmartSelect_20260728_223916_Google.jpg";
  import img5 from './assets/d002e257349aa40282691f4fd0ac2c6f.jpg.jpeg'
  import HeroComponents from './pages/HeroComponents';
  import HeroContainer2 from './pages/HeroContainer2';

  import {Route, Link, Routes } from 'react-router-dom'
  import LeftSidebar from './pages/LeftSidebar';
  import InputBarContainer from './pages/InputBarContainer';
  import RightBox from './pages/RightBox';
  import Explore from './pages2/Explore';
  import Collabration from './pages2/Collabiration';

  import Collabiration from './pages2/Collabiration';
  import LiveCompetion from './pages2/LiveCompetion';
import DigitalArts from './pages2/DigitalArts';
import Literature from './pages2/Literature';
import Artist from './pages2/Artist';

import About from './pages2/About';
import Contact from './pages2/Contact';
import WorkShop from './pages2/WorkShop';



  const App = () => {

    

    
    

    return (
      <div>

        <div className="maincontainer bg-gray-200 z-0">
            <div className="navbar relative top-0 z-50 h-20 bg-gray-200 flex justify-between sticky">
              <div className="heading text-3xl w-360 h-18 mt-1 bg-gray- shdw2 border rounded-[50px] ml-2">   
              <h1 className='mt-1 text-6xl text-black ml-22 font-lobster2'>
                Kalantara   
              </h1> 
              </div>
            <div className="box-email bg-gray-800 h-18 m-1 w-18 rounded-[100px]"></div>
            </div>


          <div className="content relative">

    {/* Sidebar — fixed now, not a flex sibling */}
    <LeftSidebar />


  <InputBarContainer />




    {/* Middle container — full width, nothing competing for its space now */}
    <div className="middlecontainer w-full">
    

      <Routes>

    <Route element={<HeroComponents />} path='/home'/>
    <Route element={<Explore />} path="/explore" />
    <Route element={<Collabiration />} path="/Collabiration" />
    <Route element={<LiveCompetion />} path="/Live Competition"/>
    <Route element={<DigitalArts />} path="/Digital Arts"/>
    <Route element={<Literature />} path="/Literature"/>
    <Route element={<Artist />} path="/Artist"/>
    <Route element={<WorkShop />} path="/WorkShop"/>
    <Route element={<About />} path="/About"/>
    <Route element={<Contact />} path="/Contact"/>


  </Routes>
      
    </div> 

    {/* Right box — fixed now, not a flex sibling */}
    <RightBox />
  </div>


  <HeroContainer2 />


  

        </div>

      </div>
    )
  }

  export default App
