import { useState } from "react";
import { Text } from "@swiss-activities/ui";
import { I } from "../I";
import { useI18n } from "../../utils/i18n/useI18n";

type RatingUserProps = {
  totalStars?: number;
  onRating?: (rating: number) => void;
  initialRating?: number;
};

export const RatingUser = ({ totalStars = 5, onRating, initialRating = 5 }: RatingUserProps) => {
  const { t } = useI18n();
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (ratingValue: number) => {
    setRating(ratingValue);
    if (onRating) {
      onRating(ratingValue);
    }
  };

  return (
    <div className="flex flex-col">
      <Text as="span" className="mb-0.5 !text-sm !text-gray-700">
        {t("reviewForm.rating")}
      </Text>
      <div>
        {[...Array(totalStars)].map((_, i) => {
          const ratingValue = i + 1;
          const color = ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9";

          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleClick(ratingValue)}
                className="sr-only"
              />
              <I
                icon="star-sharp-solid"
                className="text-3xl"
                color={color}
                fill={color}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};
