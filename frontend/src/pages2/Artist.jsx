import React from "react";

const Artist = () => {
  const cards = Array.from({ length: 20 });

  // Cards that wrap around the RightBox
  const wrappedCards = cards.slice(0, 7);

  // Remaining cards (full width)
  const remainingCards = cards.slice(7);

  return (
    <div className="maincontainer">
      <div className="container1 min-h-screen">

        {/* Heading */}
        <div className="barlivecompition h-9 w-400 border-2 bg-gray-200 border-black relative right-2 top-12 mt-6 justify-center flex">
          <h1 className="font-germania text-black text-[25px] mr-20">
            Artist
          </h1>
        </div>

        <div className="boxes left-58 top-10 relative w-378">

          {/* ---------- TOP SECTION ---------- */}
          <div className="flow-root">

            {/* Invisible spacer (same size as RightBox) */}
            <div className="float-right w-[340px] h-[284px]" />

            {wrappedCards.map((_, i) => (
              <div
                key={i}
                className="float-left h-63 w-77 mt-5 mr-3 mb-3 bg-gray-900 rounded-3xl"
              >
                <div className="h-16 bg-yellow-500 rounded-t-3xl">
                  <div className="h-19 w-19 bg-purple-500 rounded-3xl relative top-3 left-3"></div>
                </div>

                <div className="Art"></div>
              </div>
            ))}

          </div>

          {/* ---------- BOTTOM SECTION ---------- */}
          <div className="flex flex-wrap gap-3 mt-3">

            {remainingCards.map((_, i) => (
              <div
                key={i + 7}
                className="h-63 w-77 bg-gray-900 rounded-3xl"
              >
                <div className="h-16 bg-yellow-500 rounded-t-3xl">
                  <div className="h-19 w-19 bg-purple-500 rounded-3xl relative top-3 left-3"></div>
                </div>

                <div className="Art"></div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Artist;