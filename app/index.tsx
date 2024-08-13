import { Header } from "@/components/Header";
import { InputBox } from "@/components/InputBox";
import { Title } from "@/components/Todo/Title";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { CurrentTodo } from "./components/CurrentTodo";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView>
      <Header
        title="Minimal Todo"
        next={
          <Link href="/done">
            <View style={styles.headerLink}>
              <Text>Done</Text>
              <View style={styles.headerLinkIcon}>
                <Ionicons name="chevron-forward" size={24} />
              </View>
            </View>
          </Link>
        }
      />
      <View style={styles.container}>
        <InputBox />
        <View style={styles.todoContainer}>
          <Title label="Current todo" />
          <CurrentTodo />
        </View>
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
  headerLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  headerLinkIcon: {
    padding: 4,
  },
});
