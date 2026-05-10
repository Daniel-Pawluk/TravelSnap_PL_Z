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
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../components/EmptyState";
import ScreenHeader from "../components/ScreenHeader";
import TripCard from "../components/TripCard";
import TripStats from "../components/TripStats";
import { Colors } from "../constants/Colors";

interface Trip {
  id: string;
  title: string;
  destination: string;
  date: string;
  rating: number;
}

export default function HomeScreen() {
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
        <ScreenHeader tripCount={trips.length} />
        <TripStats trips={trips} />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Tytuł podrozy"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor={Colors.textSecondary}
          />
          <TextInput
            style={styles.input}
            placeholder="Miejsce"
            value={destination}
            onChangeText={setDestination}
            placeholderTextColor={Colors.textSecondary}
          />
          <TextInput
            style={styles.input}
            placeholder="Data (np. 2024-07)"
            value={date}
            onChangeText={setDate}
            placeholderTextColor={Colors.textSecondary}
          />
          <TextInput
            style={styles.input}
            placeholder="Ocena (1-5)"
            value={rating}
            onChangeText={setRating}
            placeholderTextColor={Colors.textSecondary}
            keyboardType="numeric"
          />

          <Pressable style={styles.addBtn} onPress={handleAddTrip}>
            <Text style={styles.addText}>Dodaj podroz</Text>
          </Pressable>
        </View>

        {trips.length === 0 ? (
          <EmptyState />
        ) : (
          trips.map((trip) => (
            <TripCard
              key={trip.id}
              title={trip.title}
              destination={trip.destination}
              date={trip.date}
              rating={trip.rating}
              onDel={() => handleUsun(trip.id)}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
    paddingTop: 5,
  },
  form: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: Colors.inputBg,
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  addBtn: {
    backgroundColor: Colors.primary,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
  },
  addText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.background,
  },
});
