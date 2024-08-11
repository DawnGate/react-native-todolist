import { StyleSheet, SafeAreaView, View } from "react-native";
import { DoneTodo } from "./components/DoneTodo";

export default function Done() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.todoContainer}>
        <DoneTodo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  todoContainer: {
    marginTop: 10,
  },
});
