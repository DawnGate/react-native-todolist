import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
};
export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Simple Todo List</Text>
      <View style={styles.navContainer}>
        <Text>Done</Text>
        <Link href="/done" style={{ backgroundColor: "red" }}>
          <Ionicons name="chevron-forward" size={24} />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  container: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
