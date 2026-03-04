import React from "react";

// Reuse the base Skeleton UI logic
const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded-md ${className}`} />
);

const ServiceMainSkeleton = () => {
  return (
    <div className="w-full">
      <section className="pt-32 sm:pt-40 lg:pt-45 pb-12.5 px-3 md:px-4 lg:px-5">
        <div className="container mx-auto">
          <div className="max-w-250 mx-auto flex flex-col items-center">
            {/* Title Skeleton */}
            <Skeleton className="h-12 w-3/4 mb-6" />

            {/* Subtitle Skeleton */}
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3 mb-10" />

            {/* Sub-Service Buttons Grid Skeleton */}
            <div className="flex justify-center items-center gap-3.5 mt-50 flex-wrap w-full">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-12 w-48 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Skeleton Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-5">
          <Skeleton className="h-10 w-1/2 mb-6 mx-auto" />
          <Skeleton className="h-4 w-3/4 mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default ServiceMainSkeleton;
