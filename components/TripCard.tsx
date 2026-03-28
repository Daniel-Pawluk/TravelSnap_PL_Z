import { StyleSheet, Text, View } from "react-native";
import RatingStars from "./RatingStars";

interface TripCardProps {
  title: string;
  destination: string;
  date: string;
  rating: number;
}

export default function TripCard({
  title,
  destination,
  date,
  rating,
}: TripCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>Miejsce: {destination}</Text>
      <Text>Data: {date}</Text>
      <Text>Ocena: {rating} /5</Text>
      <RatingStars rating={rating} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#adadad",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
