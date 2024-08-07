import { Header } from "@/components/Header";
import { InputBox } from "@/components/InputBox";
import { TodoItem } from "@/components/Todo/Item";
import { Title } from "@/components/Todo/Title";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Header />
      <InputBox />
      <View style={styles.todoContainer}>
        <Title label="Next todo" />
        <TodoItem />
      </View>
    </View>
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
