import { StyleSheet, SafeAreaView, View } from "react-native";
import { DoneTodo } from "./components/DoneTodo";
import { DoneHeader } from "./components/DoneHeader";
import { Header } from "@/components/Header";

export default function Done() {
  return (
    <SafeAreaView>
      <Header title="Done task" showBack />

      <View style={styles.todoContainer}>
        <DoneHeader />
        <DoneTodo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
