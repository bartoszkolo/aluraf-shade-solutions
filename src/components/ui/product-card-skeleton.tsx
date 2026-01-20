import React from 'react';
import { Skeleton } from './skeleton';

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      {/* Image skeleton */}
      <Skeleton className="w-full h-64" />

      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Title skeleton */}
        <Skeleton className="h-7 w-3/4" />

        {/* Description skeleton lines */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />

        {/* CTA skeleton */}
        <Skeleton className="h-5 w-40 mt-4" />
      </div>
    </div>
  );
};

export const BlogCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image skeleton */}
      <Skeleton className="w-full h-48" />

      {/* Content skeleton */}
      <div className="p-6 space-y-3">
        {/* Category skeleton */}
        <Skeleton className="h-4 w-24" />

        {/* Title skeleton */}
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />

        {/* Meta skeleton */}
        <Skeleton className="h-4 w-32" />

        {/* Description skeleton */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />

        {/* Link skeleton */}
        <Skeleton className="h-5 w-32 mt-2" />
      </div>
    </div>
  );
};

export const GalleryCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image skeleton */}
      <div className="relative h-64">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Content skeleton */}
      <div className="p-6 space-y-3">
        {/* Title skeleton */}
        <Skeleton className="h-5 w-full" />

        {/* Description skeleton */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />

        {/* Location and category skeleton */}
        <div className="flex justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-20" />
        </div>
      </div>
    </div>
  );
};
