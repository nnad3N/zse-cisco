import React from 'react';

const Hero = ({ data }) => {
  const { title } = data;

  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
