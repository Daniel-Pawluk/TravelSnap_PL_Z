import { ScrollView, StyleSheet, Text, View } from "react-native";
import TripCard from "../components/TripCard";

export default function HomeScreen() {
  const trips = [
    {
      id: 1,
      title: "Wycieczka 1",
      destination: "Czechy",
      date: "15.10.2024",
      rating: 5,
    },
    {
      id: 2,
      title: "Wycieczka 2",
      destination: "Czechy",
      date: "15.10.2024",
      rating: 3,
    },
    {
      id: 3,
      title: "Wycieczka 3",
      destination: "Czechy",
      date: "15.10.2024",
      rating: 1,
    },
    {
      id: 4,
      title: "Wycieczka 4",
      destination: "Czechy",
      date: "15.10.2024",
      rating: 1,
    },
    {
      id: 5,
      title: "Wycieczka 3",
      destination: "Czechy",
      date: "15.10.2024",
      rating: 1,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TravelSnap</Text>
      <Text style={styles.subtitle}>Twój dziennik podróży</Text>
      <Text style={styles.author}>Daniel Pawluk</Text>

      <ScrollView>
        {trips.map((trip) => (
          <TripCard
            key={trip.id}
            title={trip.title}
            destination={trip.destination}
            date={trip.date}
            rating={trip.rating}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#e94560",
    marginBottom: 24,
  },
  author: {
    fontSize: 16,
    color: "#888",
    fontStyle: "italic",
  },
});
