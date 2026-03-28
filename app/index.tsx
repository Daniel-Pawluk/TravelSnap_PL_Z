import { ScrollView, StyleSheet, Text, View } from "react-native";
import TripCard from "../components/TripCard";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TravelSnap</Text>
      <Text style={styles.subtitle}>Twój dziennik podróży</Text>
      <Text style={styles.author}>Daniel Pawluk</Text>

      <ScrollView>
        <TripCard
          title="Wycieczka 1"
          destination="Czechy"
          date="15.10.2024"
          rating={2}
        />
        <TripCard
          title="Wycieczka 2"
          destination="Niemcy"
          date="07.03.2023"
          rating={5}
        />
        <TripCard
          title="Wycieczka 3"
          destination="Warszawa"
          date="10.12.2022"
          rating={3}
        />
        <TripCard
          title="Wycieczka 4"
          destination="Londyn"
          date="15.05.2021"
          rating={4}
        />
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
