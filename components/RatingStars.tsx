import { Text, View } from "react-native";

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  const star = "★".repeat(rating);
  const emptyStar = "☆".repeat(5 - rating);

  return (
    <View>
      <Text>
        {star}
        {emptyStar}
      </Text>
    </View>
  );
}
