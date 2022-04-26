import React from "react";
import "./hero.styles.css";

export const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-box'>
        <div className='column-1'>
          <div className='hero-text'>
            <h2>
              <span>Earn</span> while you learn a new language.
            </h2>
            <h4>
              Support your favourite language gurus around the world and earn
              rewards and prizes for learning.
            </h4>
            <button>
              {" "}
              <h3>Sign up </h3>{" "}
            </button>
          </div>
        </div>

        <div className='column-2'>
          <div className='language-image'>
            <div className='blue-orbit' />'<div className='green-orbit' />'
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
