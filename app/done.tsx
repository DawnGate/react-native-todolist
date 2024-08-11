import { StyleSheet, SafeAreaView, View } from "react-native";
import { DoneTodo } from "./components/DoneTodo";
import { DoneHeader } from "./components/DoneHeader";

export default function Done() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.todoContainer}>
        <DoneHeader />
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
