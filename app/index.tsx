import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import TripCard from "../components/TripCard";

export default function HomeScreen() {
  interface Trip {
    id: string;
    title: string;
    destination: string;
    date: string;
    rating: number;
  }

  function parseRating(value: string): number | null {
    const parsed = Number(value);

    if (!Number.isInteger(parsed)) {
      return null;
    }

    if (parsed < 1 || parsed > 5) {
      return null;
    }

    return parsed;
  }

  function isValidYearMonth(value: string): boolean {
    return /^\d{4}-(0[1-9]|1[0-2])$/.test(value);
  }

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [trips, setTrips] = useState<Trip[]>([]);

  const handleAddTrip = () => {
    if (!title.trim() || !destination.trim()) return;

    const trimmedDate = date.trim();
    const parsedRating = parseRating(rating.trim());

    if (parsedRating === null) {
      Alert.alert("Błąd", "Ocena musi być liczbą od 1 do 5.");
      return;
    }

    if (trimmedDate && !isValidYearMonth(trimmedDate)) {
      Alert.alert("Błąd", "Data musi mieć format YYYY-MM, np. 2024-07.");
      return;
    }
    const newTrip: Trip = {
      id: Date.now().toString(),
      title: title.trim(),
      destination: destination.trim(),
      date: trimmedDate || "brak daty",
      rating: parsedRating,
    };
    setTrips([...trips, newTrip]);
    setTitle("");
    setDestination("");
    setDate("");
    setRating("");
  };

  const handleUsun = (id: string) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TravelSnap</Text>
      <Text style={styles.subtitle}>Twój dziennik podróży</Text>
      <Text style={styles.author}>Daniel Pawluk</Text>

      <TextInput
        style={styles.input}
        placeholder="Tytuł podrozy"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Miejsce"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        style={styles.input}
        placeholder="Data (np. 2024-07)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Ocena (1-5)"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />

      <Pressable style={styles.addBtn} onPress={handleAddTrip}>
        <Text style={styles.addText}>Dodaj podroz</Text>
      </Pressable>

      <Text style={styles.counter}>Liczba podróży: {trips.length}</Text>

      <ScrollView>
        {trips.map((trip) => (
          <TripCard
            key={trip.id}
            title={trip.title}
            destination={trip.destination}
            date={trip.date}
            rating={trip.rating}
            onDel={() => handleUsun(trip.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
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
  input: {
    borderWidth: 1,
    borderColor: "#CED4DA",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#FFF",
    marginBottom: 8,
    width: 250,
  },
  addBtn: {
    backgroundColor: "#61DAFB",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
    marginBottom: 16,
  },
  addText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0A1628",
  },
});
