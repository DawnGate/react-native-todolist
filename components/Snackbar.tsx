import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Snackbar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Text style={styles.text}>New todo added!!</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.buttonText}>Undo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  boxContainer: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#000",
    shadowColor: "#fff",
    shadowOffset: { width: 2, height: 2 },
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  buttonText: {
    color: "#FF8225",
  },
});
