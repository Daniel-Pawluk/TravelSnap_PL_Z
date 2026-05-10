import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  const safeRating = Math.max(0, Math.min(5, Math.floor(rating)));

  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Ionicons
          key={index}
          name={index < safeRating ? "star" : "star-outline"}
          size={16}
          color={Colors.accent}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 2,
  },
});
