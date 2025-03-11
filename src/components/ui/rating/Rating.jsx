import { Star } from "lucide-react";

const Rating = ({ color = "#FABF94", size = 13, rating }) => {
  return (
    <div>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={size}
            className="text-[#BCBCBC]" // Mặc định màu xám
            style={{ color: index < rating ? color : "#BCBCBC" }} // Đổi màu theo rating
            fill={index < rating ? "currentColor" : "#BCBCBC"}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
