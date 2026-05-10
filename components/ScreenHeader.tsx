import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

interface ScreenHeaderProps {
  tripCount: number;
}

export default function ScreenHeader({ tripCount }: ScreenHeaderProps) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>TravelSnap</Text>
        <Text style={styles.subtitle}>Twój dziennik podróży</Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>{tripCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  badge: {
    backgroundColor: Colors.accent,
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: Colors.textPrimary,
    fontSize: 18,
    fontWeight: "bold",
  },
});
