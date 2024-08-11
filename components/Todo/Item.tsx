import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from "../CheckBox";
import { IconButton } from "../IconButton";
import { Ionicons } from "@expo/vector-icons";
import { ImplTodoItem } from "@/types";
import { useStoreContext } from "@/hooks/useStoreContext";

type Props = {
  data: ImplTodoItem;
};
export const TodoItem = ({ data }: Props) => {
  const { doneTodo, deleteTodo, restoreTodo } = useStoreContext();

  const isDone = !!data.completedDate;

  const toggleTodo = () => {
    if (isDone) {
      restoreTodo(data.id);
    } else {
      doneTodo(data.id);
    }
  };

  const handleAction = () => {
    if (isDone) {
      restoreTodo(data.id);
    } else {
      deleteTodo(data.id);
    }
  };

  let icon;

  if (isDone) {
    icon = <Ionicons name="refresh" color="blue" size={24} />;
  } else {
    icon = <Ionicons name="trash" color="red" size={24} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.optionContainer}>
        <CheckBox isDone={isDone} handleToggle={toggleTodo} />
      </View>
      <View style={styles.textContainer}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={[styles.text, isDone && styles.textDone]}
        >
          {data.title}
        </Text>
      </View>
      <View style={styles.optionContainer}>
        <IconButton icon={icon} handlePress={handleAction} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderCurve: "continuous",
    paddingHorizontal: 8,
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  textContainer: {
    flex: 1,
    paddingTop: 2,
  },
  optionContainer: {
    flexShrink: 0,
  },
  text: {
    fontSize: 18,
    lineHeight: 20.4,
  },
  textDone: {
    textDecorationLine: "line-through",
  },
});
