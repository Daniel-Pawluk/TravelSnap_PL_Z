import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

interface Trip {
  id: string;
  title: string;
  destination: string;
  date: string;
  rating: number;
}

interface TripStatsProps {
  trips: Trip[];
}

export default function TripStats({ trips }: TripStatsProps) {
  const tripCount = trips.length;

  const averageRating =
    tripCount === 0
      ? "0.0"
      : (trips.reduce((sum, trip) => sum + trip.rating, 0) / tripCount).toFixed(
          1,
        );

  const countryCount = new Set(trips.map((trip) => trip.destination)).size;

  return (
    <View style={styles.container}>
      <View style={styles.statCard}>
        <Text style={styles.value}>{tripCount}</Text>
        <Text style={styles.label}>Podróże</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.value}>{averageRating}</Text>
        <Text style={styles.label}>Śr. ocena</Text>
      </View>

      <View style={styles.statCard}>
        <Text style={styles.value}>{countryCount}</Text>
        <Text style={styles.label}>Kraje</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.card,
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  value: {
    color: Colors.textPrimary,
    fontSize: 20,
    fontWeight: "bold",
  },
  label: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },
});
