import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(20).fill(0).map((_, i) => (
        <div key={i} className="flex flex-col p-2 m-2 border-2 border-gray-100 rounded-lg h-[350px] w-[250px] items-center shadow-sm animate-pulse bg-white">
          <div className="h-6 w-3/4 bg-gray-200 rounded m-2"></div>
          <div className="h-[250px] w-full bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer