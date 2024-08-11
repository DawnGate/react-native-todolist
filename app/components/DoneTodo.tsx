import { TodoItem } from "@/components/Todo/Item";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
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
    <View>
      {renderTodoItems.map((item) => (
        <TodoItem key={item.id} data={item} />
      ))}
    </View>
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
