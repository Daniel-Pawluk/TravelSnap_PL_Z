import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
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
    padding: 8,
    marginTop: 12,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },

  addDelText: {
    color: Colors.accent,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: Colors.card,
    padding: 15,
    borderRadius: 16,
    marginVertical: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.textPrimary,
  },
  infoText: {
    fontSize: 13,
    marginBottom: 4,
    color: Colors.textSecondary,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: "600",
    marginTop: 10,
    marginRight: 10,
    color: Colors.textSecondary,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
