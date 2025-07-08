import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Problem Solver",
          "Website Developer",
          "Creative Thinker",
          "MERN Stack Developer",
          "Open Source Enthusiast",
          "Comic Lover",
          "Tech Enthusiast",          
          "Quick Learner",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
