import React from "react";

import {
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";

import { FaReact } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";

import heroImage from "./assets/5cb7852a6cd7a5b4428a74ddecdaa2ae.jpg.jpeg";

import img1 from "./assets/SmartSelect_20260728_223916_Google.jpg";
import img2 from "./assets/SmartSelect_20260728_223916_Google.jpg";
import img3 from "./assets/SmartSelect_20260728_223916_Google.jpg";
import img4 from "./assets/SmartSelect_20260728_223916_Google.jpg";
import img5 from "./assets/d002e257349aa40282691f4fd0ac2c6f.jpg.jpeg";


// ================= ADMIN PAGES =================

import AdminDashBoard from "./pages2/AdminDashBoard";
import AdminAllPosts from "./pages2/AdminAllPosts";
import AdminReportedPosts from "./pages2/AdminReportedPosts";
import AdminAllUsers from "./pages2/AdminAllUsers";

import AdminLayout from "./pages2/AdminLayout";


// ================= NORMAL WEBSITE COMPONENTS =================

import HeroComponents from "./pages/HeroComponents";
import HeroContainer2 from "./pages/HeroContainer2";

import LeftSidebar from "./pages/LeftSidebar";
import InputBarContainer from "./pages/InputBarContainer";
import RightBox from "./pages/RightBox";


// ================= NORMAL WEBSITE PAGES =================

import Explore from "./pages2/Explore";

import Collabiration from "./pages2/Collabiration";

import LiveCompetion from "./pages2/LiveCompetion";

import DigitalArts from "./pages2/DigitalArts";

import Literature from "./pages2/Literature";

import Artist from "./pages2/Artist";

import About from "./pages2/About";

import Contact from "./pages2/Contact";

import WorkShop from "./pages2/WorkShop";

import ProfilePage from "./pages2/ProfilePage";

import PicturePage from "./pages2/PicturePage";

import ProfileEditPage from "./pages2/ProfileEditPage";

import Post from "./pages2/Post";


// ================= ICONS =================

import { BsPatchPlus } from "react-icons/bs";
import Collabiration2 from "./pages2/Collabiration2";


const App = () => {

  const location = useLocation();


  // =================================================
  // ================= ADMIN PAGES ===================
  // =================================================

  const isAdminPage =
    location.pathname === "/AdminDashBoard" ||
    location.pathname === "/AdminReportedPosts" ||
    location.pathname === "/AllPosts" ||
    location.pathname === "/AdminAllUsers";


  return (

    <div>

      <div className="maincontainer bg-gray-200 z-0">


        {/* ================================================= */}
        {/* =============== NORMAL WEBSITE UI =============== */}
        {/* ================================================= */}

        {!isAdminPage && (

          <>


            {/* ================= NAVBAR ================= */}

            <div
              className="
                navbar
                relative
                top-0
                z-50
                h-20
                bg-gray-200
                flex
                justify-between
                sticky
              "
            >

              <div
                className="
                  heading
                  text-3xl
                  w-360
                  h-18
                  mt-1
                  bg-gray-
                  shdw2
                  border
                  rounded-[50px]
                  ml-2
                  flex
                  justify-between
                "
              >

                <h1
                  className="
                    mt-1
                    text-6xl
                    text-black
                    ml-22
                    font-lobster2
                  "
                >
                  Skioma
                </h1>


                <div className="rightsection flex">


                  {/* ================= POST BUTTON ================= */}

                  <div className="postbutton h-15 w-15">

                    <Link to="/Post">

                      <BsPatchPlus
                        className="
                          mt-3
                          cursor-pointer
                          h-11
                          w-11
                        "
                      />

                    </Link>

                  </div>


                  {/* ================= PROFILE BUTTON ================= */}

                  <Link to="/ProfilePage">

                    <div
                      className="
                        myprofilenavigationbutton
                        h-15
                        mr-4
                        mt-[5px]
                        rounded-[100px]
                        w-50
                        border-white
                        transition
                        hover:bg-white
                        hover:border-black
                        duration-700
                        hover:text-black
                        border-2
                        bg-black
                        font-josefin
                        text-white
                      "
                    >

                      <h1 className="text-[20px] text-center pt-5">
                        My Profile
                      </h1>

                    </div>

                  </Link>


                </div>

              </div>


              {/* ================= PROFILE EDIT ================= */}

              <Link to="/ProfileEditPage">

                <div
                  className="
                    box-email
                    bg-gray-800
                    h-18
                    m-1
                    w-18
                    rounded-[100px]
                  "
                >

                </div>

              </Link>


            </div>



            {/* ================= CONTENT ================= */}

            <div className="content relative">


              {/* ================= LEFT SIDEBAR ================= */}

              <LeftSidebar />



              {/* ================= SEARCH BAR ================= */}

              {location.pathname !== "/Post" && (

                <InputBarContainer />

              )}



              {/* ================= RIGHT BOX ================= */}

              {location.pathname !== "/Post" && (

                <RightBox />

              )}



              {/* ================= HERO CONTAINER 2 ================= */}

              <HeroContainer2 />


            </div>


          </>

        )}



        {/* ================================================= */}
        {/* ================= MIDDLE CONTAINER ============== */}
        {/* ================================================= */}

        <div
          className={
            isAdminPage
              ? "w-full"
              : "middlecontainer w-full"
          }
        >

          <Routes>


            {/* ================================================= */}
            {/* ================= HOME ========================== */}
            {/* ================================================= */}

            <Route
              path="/home"
              element={<HeroComponents />}
            />



            {/* ================================================= */}
            {/* ================= EXPLORE ======================= */}
            {/* ================================================= */}

            <Route
              path="/explore"
              element={<Explore />}
            />



            {/* ================================================= */}
            {/* ================= COLLABORATION ================= */}
            {/* ================================================= */}

            <Route
              path="/Collabiration"
              element={<Collabiration />}
            />



            {/* ================================================= */}
            {/* ================= LIVE COMPETITION ============== */}
            {/* ================================================= */}

            <Route
              path="/Live Competition"
              element={<LiveCompetion />}
            />



            {/* ================================================= */}
            {/* ================= NAIL ART ====================== */}
            {/* ================================================= */}

            <Route
              path="/Nail Art"
              element={<DigitalArts />}
            />



            {/* ================================================= */}
            {/* ================= RESIN ART ===================== */}
            {/* ================================================= */}

            <Route
              path="/Resin Art"
              element={<Literature />}
            />



            {/* ================================================= */}
            {/* ================= ARTIST ========================= */}
            {/* ================================================= */}

            <Route
              path="/Artist"
              element={<Artist />}
            />



            {/* ================================================= */}
            {/* ================= WORKSHOP ======================= */}
            {/* ================================================= */}

            <Route
              path="/WorkShop"
              element={<WorkShop />}
            />



            {/* ================================================= */}
            {/* ================= ABOUT ========================== */}
            {/* ================================================= */}

            <Route
              path="/About"
              element={<About />}
            />



            {/* ================================================= */}
            {/* ================= CONTACT ======================== */}
            {/* ================================================= */}

            <Route
              path="/Contact"
              element={<Contact />}
            />



            {/* ================================================= */}
            {/* ================= PROFILE ======================== */}
            {/* ================================================= */}

            <Route
              path="/ProfilePage"
              element={<ProfilePage />}
            />



            {/* ================================================= */}
            {/* ================= PICTURE ======================== */}
            {/* ================================================= */}

            <Route
              path="/PicturePage"
              element={<PicturePage />}
            />



            {/* ================================================= */}
            {/* ================= PROFILE EDIT ================== */}
            {/* ================================================= */}

            <Route
              path="/ProfileEditPage"
              element={<ProfileEditPage />}
            />



            {/* ================================================= */}
            {/* ================= POST =========================== */}
            {/* ================================================= */}

            <Route
              path="/Post"
              element={<Post />}
            />
            <Route
              path="/Collabiration2"
              element={<Collabiration2 />}
            />



            {/* ================================================= */}
            {/* ================================================= */}
            {/* ================= ADMIN ROUTES =================== */}
            {/* ================================================= */}
            {/* ================================================= */}


            <Route element={<AdminLayout />}>


              {/* ================= ADMIN DASHBOARD ================= */}

              <Route
                path="/AdminDashBoard"
                element={<AdminDashBoard />}
              />


              {/* ================= ALL POSTS ================= */}

              <Route
                path="/AllPosts"
                element={<AdminAllPosts />}
              />


              {/* ================= REPORTED POSTS ================= */}

              <Route
                path="/AdminReportedPosts"
                element={<AdminReportedPosts />}
              />


              {/* ================= ALL USERS ================= */}

              <Route
                path="/AdminAllUsers"
                element={<AdminAllUsers />}
              />


            </Route>


          </Routes>

        </div>


      </div>

    </div>

  );

};


export default App;