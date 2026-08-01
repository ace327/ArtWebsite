import React from 'react'

const Explore = () => {
  return (  
    <div>
      <div className="explore h-700 w-auto flex">


        <div className="boxes flex gap-2 relative left-56 top-23">
          <div className="box1 h-95 w-58 rounded-2xl bg-blue-700"></div>
          <div className="box1 h-95 w-58 rounded-2xl bg-blue-700"></div>
          <div className="box1 h-95 w-58 rounded-2xl bg-blue-700"></div>
          <div className="box1 h-95 w-58 rounded-2xl bg-blue-700"></div>
        </div>

        <div className="youarexploring h-30 w-78 left-61 relative top-88">
          <div className="first2 flex">
            <div className="second2 h-15 w-57 bg-gray-200 text-[45px] font-sans font-bold gradient-text">You Are</div>
            <div className="second2 h-15  w-21 bg-gray-200"></div>
          </div>
          <div className="first2 flex">
            <div className="2second2 h-15  w-21 bg-gray-200"></div>
            <div className="2second2 h-15  w-57 bg-gray-200 text-[41px] font-sans font-bold gradient-text">EXPLORING</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Explore
