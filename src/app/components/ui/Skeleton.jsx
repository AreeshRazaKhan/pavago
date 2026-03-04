import React from "react";

const Skeleton = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded-md ${className}`}
      style={{ animationDuration: "1.5s" }}
    />
  );
};

export default Skeleton;
