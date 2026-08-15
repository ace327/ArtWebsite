import React from 'react'
import img1 from '../assets/WhatsApp Image 2026-08-11 at 8.25.51 PM.jpeg'
import img2 from '../assets/763276773_1022323840785291_6384183853190217109_n (3).webp'
import img3 from '../assets/772510873_1002431632843365_2996181914640374962_n.webp'

const About = () => {
  return (
    <div>
      <div className="mainc bg-black">


        <div className="conta1 ">



        
        <div
          className="contain ml-3 "
          style={{
            backgroundImage: `url("${img3}")`,
            backgroundSize: '1140px 620px',
            backgroundRepeat: 'no-repeat',
             backgroundPosition: '363px 0px',
            

            


            
          }}
        >

          <div className="boxes w-378 h-153">

            <div className="abou  h-142 top-2 w-130 border-4 border-red-300 text-center ml-53 relative rounded-4xl">
              <h1 className="text-8xl text-gray-400 font-light mt-3 gradient-text5">
                About Us
              </h1>


              <h4 className="text-white mt-13  ml-5 mr-5 text-[20px]">
                
                
                <h1 className="text-[38px]">
                Welcome to Kalantara <br /> 
                
                </h1>  Where Creativity Finds Its Stage. <br /> <br />

​Kalantara is a vibrant hub dedicated to celebrating art in all its forms. Whether it’s traditional masterpieces, intricate nail art, hands-on workshops, or thrilling live competitions, we exist to bridge the gap between passion and platform. <br /> <br />

​Our mission is simple: to empower artists, inspire creators, and build a thriving community where every form of artistic expression finds a voice.</h4>
            </div>

          </div>


          <div className="second bg-black h-160 w-378 flex gap-4 mt-10"> 
        
            
            <div className="para left-32 relative h-70 w-197 mt-5  rounded-4xl ml-20">


              h1 
              <h1 className="text-[60px] text-white ">  What You’ll Discover Here</h1>


              <h3 className="text-[30px] text-white">​Art has no boundaries, and neither do we. At Kalantara, we embrace both timeless traditions and modern creative expressions under one roof.
</h3>
              
              
              
               <p className="mt-13 text-[17px] text-white"> <h3  className="text-[30px] text-white  "> • ​Classic & Fine Arts:</h3> <h4 className="left-6 relative">
                
                Dive deep into the detailed patterns of Mandala art, the rich depth of Oil Paintings, and the soulful textures of Charcoal Art.
                
                
                </h4>
                

 <h3   className="text-[30px] text-white  "> • ​Modern & Trendy Crafts (Coming Soon):  </h3> <h4 className="left-6 relative">
  
  Get ready for expressive, modern mediums like Nail Art and Resin Art—bringing interactive <br /> showcases and specialized masterclasses to your fingertips!
  
  
  </h4>
  

<h3    className="text-[30px] text-white  ">​ • Workshops & Competitions:  </h3>  <h4 className="left-6 relative">
  
  Learn step-by-step from skilled artists or put your talent to the test in our live art challenges. 
  
  
  </h4>
  
  </p>
            </div>
            
            <img src={img2} alt="" srcset="" className="left-32 relative h-140 w-120 rounded-3xl" />  </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default About