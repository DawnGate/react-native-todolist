import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Simple Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
  },
  container: {
    paddingTop: 20,
  },
});
