import React from 'react'

const ProfilePage = () => {
  return (
    <div>
      <div className="maincontainer">


        <div className="container1 min-h-screen">


            <div className="profileContainer bg-gray-200 ml-53 h-screen">


                <div className="firstbox mt-5 bg-gray-200 rounded-3xl h-110 w-245 flex gap-2">

                    <div className="profileinfo h-110 w-80 bg-gray-600 rounded-3xl">



                        <div className="info h-18 rounded-3xl flex">

                            <div className="img h-17 w-17 bg-black rounded-4xl   mt-3 ml-3 z-2">


                            </div>

                            <div className="followdollholet  text-[18px] mt-[22px] text-white  z-1 right-4 relative bg-gray-500 shdw2 h-9 w-55 rounded-r-3xl"> 


                               <h1 className="ml-6 mt-1">
                                
                                 Suthar Marcus Mewada
                                </h1>
                                
                                



                                


                            </div>
                        </div>



                        <div className="flowbox ">


                            <div className="posts mt-2 ml-20 text-[20px] text-white m-2 w-35 rounded-2xl bg-black">
                                
                                
                                
                                <h1 className="ml-7 relative">
                                    
                                    Posts  -  99
                                    
                                    
                                    
                                    </h1>
                                    
                                     </div>


                            <div className="foll mt-3 flex gap-7 ml-9 ga bg-gray-500 w-60 rounded-2xl shdw2">


                            <div className="posts text-[20px] text-white m-2">Followers 


                                <br /> <h1 className="ml-8">20</h1>
                            </div>
                            <div className="posts text-[20px] text-white m-2">Followings 

                                <br /> <h1 className="ml-8"> 25</h1>
                            </div>
                            </div>
                        </div>


                        <div className="biobox ml-[10px]  mt-4">

                            <input type="text" className="h-30 w-75 border border-white rounded-2xl text-white" placeholder='Bio' />
                        </div>

                        


                        
                        
                        


                        </div>

                        <div className="image bg-gray-400 h-110 rounded-3xl w-162">

                    </div>


                </div>



            </div>






        </div>
      </div>
    </div>
  )
}

export default ProfilePage
