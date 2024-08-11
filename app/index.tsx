import { Header } from "@/components/Header";
import { InputBox } from "@/components/InputBox";
import { Title } from "@/components/Todo/Title";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { CurrentTodo } from "./components/CurrentTodo";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <InputBox />
      <View style={styles.todoContainer}>
        <Title label="Current todo" />
        <CurrentTodo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  todoContainer: {
    marginTop: 10,
  },
});
