import React from 'react';
import { StarIcon } from './icons';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-[#FAFAFA] p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex items-center">
          <img
            src={review.image}
            alt={review.author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-3">
            <p className="font-semibold text-gray-800 text-base sm:text-lg">
              {review.author}
            </p>
            <p className="text-sm text-gray-500">{review.for}</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-2 sm:mt-0">{review.date}</p>
      </div>

      {/* Rating */}
      <div className="flex mt-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
        {review.text}
      </p>
    </div>
  );
};

export default ReviewCard;
