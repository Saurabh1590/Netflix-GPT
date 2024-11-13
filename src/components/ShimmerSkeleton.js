import React from "react";

const ShimmerSkeleton = () => {
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div className="animate-pulse">
        {/* Skeleton Title */}
        <div className="h-8 bg-gray-700 rounded mb-4 w-1/3"></div>

        {/* Skeleton Cards */}
        <div className="flex space-x-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-36 sm:w-48 lg:w-56 h-56 bg-gray-700 rounded"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerSkeleton;
