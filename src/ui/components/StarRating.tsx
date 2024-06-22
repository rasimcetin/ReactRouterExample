import React from "react";

interface StartRatingProps {
  rating: number;
  onChange?: (newRating: number) => void;
}

const StartRating: React.FC<StartRatingProps> = ({ rating, onChange }) => {
  const handleClick = (newRating: number) => {
    onChange?.(newRating);
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-xl font-bold ${
            star <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StartRating;
