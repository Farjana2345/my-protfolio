import React from 'react';
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
      options={{
        strings: [
          "Highly Motivated",
          "To work in an IT or Technical",
          "Organization where I can",
          "Practice and develop my skills",
          "And help the company to complete",
          "Its ultimate mission",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    );
};

export default Type;