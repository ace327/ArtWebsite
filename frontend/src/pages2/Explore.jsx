import React from 'react'
import { Link } from 'react-router-dom'
import Singularity from '../pages/Singularity'

const Explore = () => {

  const boxData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ]

  return (  
    <div>

      <div className="maincontainer bg-gray-200">

        <div className="explore h-120 w-auto flex">

          {/* FIRST BOX ROW */}
          <div className="boxes flex gap-2 relative left-56 top-23">

            {boxData.slice(0, 4).map((box) => (

              <Link
                to="/PicturePage"
                key={box.id}
                className="box1 h-95 w-58 rounded-2xl border-2 bg-gray-400"
              >

                <div className="top-77 rounded-b-3xl relative profile h-17 flex">

                  <div className="img h-13 rounded-[100px] top-3 relative ml-1 bg-gray-600 w-13">
                  </div>

                  <div className="name">
                    <h1 className="text-[25px] ml-1 mt-5">
                    </h1>
                  </div>

                </div>

              </Link>

            ))}

          </div>


          <div className="youarexploring h-30 w-78 left-61 relative top-88">

            <div className="first2 flex">

              <div className="second2 h-15 w-57 bg-gray-200 text-[45px] font-lobster2 font-bold gradient-text2">
                You Are
              </div>

              <div className="second2 h-15 w-21 bg-gray-200">
              </div>

            </div>

            <div className="first2 flex">

              <div className="2second2 h-15 w-21 bg-gray-200">
              </div>

              <div className="2second2 h-15 w-57 bg-gray-200 text-[41px] font-lobster2 font-bold gradient-text2">
                EXPLORING
              </div>

            </div>

          </div>

        </div>


        <div className="bigletters h-20 w-322 bg-gray-200 rounded-2xl border-black mb-2 left-56 relative">

          <h1 className="h-70 ml-5 w-auto bg-gray-200 text-[40px] gradient-text3 font-lobster2 font-bold">
            Welcome to your personal art escape
          </h1>

        </div>


        <div className="tectanglecontaer left-56 relative flex gap-2">

          <div className="rectanglearts h-58 w-95 bg-gray-400 border-2 relative rounded-2xl">

            <div className="top-40 rounded-b-3xl relative profile h-17 w-auto flex">

              <div className="img h-13 rounded-[100px] top-3 relative ml-1 bg-gray-600 w-13">
              </div>

              <div className="name">
                <h1 className="text-[25px] ml-2 mt-5">
                </h1>
              </div>

            </div>

          </div>


          <div className="rectanglearts h-58 w-95 bg-gray-400 border-2 relative rounded-2xl">

            <div className="top-40 rounded-b-3xl relative profile h-17 w-auto flex">

              <div className="img h-13 rounded-[100px] top-3 relative ml-1 bg-gray-600 w-13">
              </div>

              <div className="name">
                <h1 className="text-[25px] ml-2 mt-5">
                </h1>
              </div>

            </div>

          </div>


          <div className="rectanglearts h-58 w-95 bg-gray-400 border-2 relative rounded-2xl">

            <div className="top-40 rounded-b-3xl relative profile h-17 w-auto flex">

              <div className="img h-13 rounded-[100px] top-3 relative ml-1 bg-gray-600 w-13">
              </div>

              <div className="name">
                <h1 className="text-[25px] ml-2 mt-5">
                </h1>
              </div>

            </div>

          </div>

        </div>


        <div className="addReactangle h-60 w-374 left-3 relative mt-4 rounded-[11px] bg-gray-900">
        </div>


        {/* SECOND BOX ROW */}

      <div className="boxes2 flex flex-wrap gap-2 w-[1200px] left-56 top-4 relative">

  {boxData.slice(4).map((box) => (

    <Link
      to="/PicturePage"
      key={box.id}
      className="box1 h-95 w-58 rounded-2xl border-2 bg-gray-400"
    >

      <div className="top-77 rounded-b-3xl relative profile h-17 flex">

        <div className="img h-13 rounded-[100px] top-3 relative ml-1 bg-gray-600 w-13">
        </div>

        <div className="name">
          <h1 className="text-[25px] ml-1 mt-5">
          </h1>
        </div>

      </div>

    </Link>

  ))}

</div>

      </div>

    </div>
  )
}

export default Explore