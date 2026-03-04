import React from "react";

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
);

const SubServiceSkeleton = () => {
  return (
    <div className="w-full">
      <section className="pt-32 sm:pt-40 lg:pt-45 pb-20 px-3 md:px-4 lg:px-5 bg-[#f2ebff]">
        <div className="container mx-auto">
          <div className="max-w-250 mx-auto flex flex-col items-center">
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-10" />
            <Skeleton className="h-64 w-full rounded-xl" />
          </div>
        </div>
      </section>
      <section className="px-3 md:px-4 lg:px-5 py-70">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="w-full lg:w-1/2">
              <Skeleton className="h-10 w-2/3 mb-6" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-12 w-40 mt-10" />
            </div>
            <div className="w-full lg:w-2/5">
              <Skeleton className="h-80 w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubServiceSkeleton;
