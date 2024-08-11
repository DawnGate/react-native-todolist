import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { StoreContext } from "../storeContext";
import { TodoItem } from "@/components/Todo/Item";

export const CurrentTodo = () => {
  const { todoItems } = useContext(StoreContext);

  const renderTodoItems = todoItems
    ?.filter((item) => !item.completedDate)
    .sort(
      (a, b) =>
        (b.updatedDate ?? b.createdDate).getTime() -
        (a.updatedDate ?? a.createdDate).getTime()
    );

  if (!renderTodoItems || renderTodoItems.length === 0) {
    return (
      <View>
        <Text style={styles.text}>🎉 All your todo is completed!!</Text>
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
