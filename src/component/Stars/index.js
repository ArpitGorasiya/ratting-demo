import React, { useState } from "react";

const Stars = ({ handleStarClick, value = 0 }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="gap-2 flex" onMouseLeave={() => setHover(0)}>
      <div className="flex">
        <i
          class={`fa text-4xl text-yellow-500 absolute pointer-events-none ${
            (hover ? hover >= 1 : value >= 1)
              ? "fa-star"
              : (hover ? hover >= 0.5 : value >= 0.5)
              ? "fa-star-half-full"
              : "fa-star-o"
          }`}
        ></i>
        <div className="flex">
          <div
            className="h-8 w-4"
            onClick={() => handleStarClick(0.5)}
            onMouseEnter={() => setHover(0.5)}
          ></div>
          <div
            className="h-8 w-4"
            onClick={() => handleStarClick(1)}
            onMouseEnter={() => setHover(1)}
          ></div>
        </div>
      </div>
      <div className="flex relative">
        <i
          class={`fa text-4xl text-yellow-500 absolute pointer-events-none ${
            (hover ? hover >= 2 : value >= 2)
              ? "fa-star"
              : (hover ? hover >= 1.5 : value >= 1.5)
              ? "fa-star-half-full"
              : "fa-star-o"
          }`}
        ></i>
        <div className="flex">
          <div
            className="h-8 w-4"
            onClick={() => handleStarClick(1.5)}
            onMouseEnter={() => setHover(1.5)}
          ></div>
          <div
            className="h-8 w-4"
            onClick={() => handleStarClick(2)}
            onMouseEnter={() => setHover(2)}
          ></div>
        </div>
      </div>
      <div className="flex relative">
        <i
          class={`fa text-4xl text-yellow-500 absolute pointer-events-none ${
            (hover ? hover >= 3 : value >= 3)
              ? "fa-star"
              : (hover ? hover >= 2.5 : value >= 2.5)
              ? "fa-star-half-full"
              : "fa-star-o"
          }`}
        ></i>
        <div className="flex">
          <div
            className="h-8 w-4"
            onClick={() => handleStarClick(2.5)}
            onMouseEnter={() => setHover(2.5)}
          ></div>
          <div
            className="h-8 w-4"
            onClick={() => handleStarClick(3)}
            onMouseEnter={() => setHover(3)}
          ></div>
        </div>
      </div>
      <div className="flex relative">
        <i
          class={`fa text-4xl text-yellow-500 absolute pointer-events-none ${
            (hover ? hover >= 4 : value >= 4)
              ? "fa-star"
              : (hover ? hover >= 3.5 : value >= 3.5)
              ? "fa-star-half-full"
              : "fa-star-o"
          }`}
        ></i>
        <div className="flex">
          <div
            className="h-8 w-4"
            onClick={() => handleStarClick(3.5)}
            onMouseEnter={() => setHover(3.5)}
          ></div>
          <div
            className="h-8 w-4"
            onClick={() => handleStarClick(4)}
            onMouseEnter={() => setHover(4)}
          ></div>
        </div>
      </div>
      <div className="flex relative">
        <i
          class={`fa text-4xl text-yellow-500 absolute pointer-events-none ${
            (hover ? hover >= 5 : value >= 5)
              ? "fa-star"
              : (hover ? hover >= 4.5 : value >= 4.5)
              ? "fa-star-half-full"
              : "fa-star-o"
          }`}
        ></i>
        <div className="flex">
          <div
            className="h-8 w-4"
            onClick={() => handleStarClick(4.5)}
            onMouseEnter={() => setHover(4.5)}
          ></div>
          <div
            className="h-8 w-4"
            onClick={() => handleStarClick(5)}
            onMouseEnter={() => setHover(5)}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stars;
