import { Pressable, StyleSheet, Text, View } from "react-native";
import RatingStars from "./RatingStars";

interface TripCardProps {
  title: string;
  destination: string;
  date: string;
  rating: number;
  onDel?: () => void;
}

export default function TripCard({
  title,
  destination,
  date,
  rating,
  onDel,
}: TripCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.infoText}>Miejsce: {destination}</Text>
      <Text style={styles.infoText}>Data: {date}</Text>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>Ocena: {rating}/5</Text>
        <RatingStars rating={rating} />
      </View>
      {onDel && (
        <Pressable onPress={onDel} style={styles.addDel}>
          <Text style={styles.addDelText}>Usun</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  addDel: {
    backgroundColor: "#ff9292",
    padding: 5,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  addDelText: {
    color: "red",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#d3d3d3",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 4,
    color: "#000000ae",
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    marginRight: 10,
  },
  rating: {
    flexDirection: "row",
  },
});
