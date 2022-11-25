import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="border-blue-400 border-dotted animate-spin inline-block w-10 h-10 border-8 rounded-full"
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
