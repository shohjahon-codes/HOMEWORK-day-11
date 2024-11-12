import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      className="px-6 py-2 rounded-full font-semibold bg-black bg-opacity-50 text-white backdrop-blur-md transition duration-200 ease-in-out hover:bg-white hover:text-black"
    >
      {text}
    </button>
  );
};

export default Button;
