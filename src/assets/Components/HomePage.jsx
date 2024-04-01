import React, { useState } from "react";

const HomePage = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClickImg = () => {
    setIsClicked(true);

    // Reset the animation after a certain duration if needed
    setTimeout(() => {
      setIsClicked(false);
    }, 1000); // Adjust the duration as needed
  };

  return (
    <div className="flex justify-center items-center h-screen pt-12" style={{ height: "calc(100vh - 44px)"}}>
      <div>
        <div className="flex items-start">
          <div>
            <p className="text-md font-medium">Hello World!!!</p>
            <p className="text-5xl font-semibold">
              I'm <span className="text-yellow">Taingmeng</span>
            </p>
            <p className="text-5xl font-semibold mb-2">Heng</p>
            <p className="text-md font-medium">And I'm a Web Developer.</p>
          </div>
          <div
            className={`animate__animated ${isClicked ? 'animate__backOutUp' : ''} ${
              isClicked ? 'cursor-default' : 'cursor-pointer'
            }`}    
            onClick={handleClickImg}
          >
            <img
              src="/Sitting Astronaut.png"
              alt="Sitting Astronaut"
              width="250px"
            />
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <p className="text-xl font-medium">Tech Stack</p>
          <p className="text-xl font-medium ml-3">|</p>
          <div className="flex gap-4 ml-3 items-center">
            <img src="/html.svg" role="img" width="29px" />
            <img src="/css.svg" role="img" width="29px" />
            <img src="/javascript.svg" role="img" width="26px" />
            <img src="/react.svg" role="img" width="29px" />
            <img src="/tailwind.svg" role="img" width="29px" />
            <img src="/mui.svg" role="img" width="29px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
