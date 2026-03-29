import { StyleSheet, Text } from "react-native";

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  const safeRating = Math.max(0, Math.min(5, Math.floor(rating)));

  const star = "★".repeat(safeRating);
  const emptyStar = "☆".repeat(5 - safeRating);

  return (
    <Text style={styles.stars}>
      {star}
      {emptyStar}
    </Text>
  );
}

const styles = StyleSheet.create({
  stars: {
    fontSize: 20,
    color: "#ffbc04",
    margin: 5,
  },
});
