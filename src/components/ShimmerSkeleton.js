import React from "react";

const ShimmerSkeleton = () => {
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div className="animate-pulse">
        {/* Skeleton Title */}
        <div className="h-8 sm:h-11 bg-gray-700 mb-4 w-2/3 sm:w-1/3 rounded-md"></div>

        {/* Skeleton Cards */}
        <div className="flex space-x-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-1/3 sm:w-48 lg:w-56 h-56 sm:h-80 bg-gray-700 rounded-md"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerSkeleton;
