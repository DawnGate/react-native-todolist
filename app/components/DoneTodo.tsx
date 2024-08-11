import { TodoItem } from "@/components/Todo/Item";
import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { StoreContext } from "../storeContext";

export const DoneTodo = () => {
  const { todoItems } = useContext(StoreContext);

  const renderTodoItems = todoItems
    ?.filter((item) => item.completedDate)
    .sort(
      (a, b) =>
        (b.completedDate ?? b.createdDate).getTime() -
        (a.completedDate ?? a.createdDate).getTime()
    );

  if (!renderTodoItems || renderTodoItems.length === 0) {
    return (
      <View>
        <Text style={styles.text}>🔎 Not found any completed todo!!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={renderTodoItems}
      renderItem={({ item }) => <TodoItem data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "500",
    paddingVertical: 10,
  },
});
