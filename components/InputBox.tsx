import { useActions } from "@/hooks/useActions";
import { useState } from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";

export const InputBox = () => {
  const [inputValue, setInputValue] = useState("");

  const { addTodo } = useActions();

  const onSubmitEditing = () => {
    Keyboard.dismiss();
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
    }
    setInputValue("");
  };

  const onChangeText = (text: string) => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        placeholder="New todo..."
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 20,
  },
});
