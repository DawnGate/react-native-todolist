import { useState } from "react";
import {
  Keyboard,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
  View,
} from "react-native";

export const InputBox = () => {
  const [inputValue, setInputValue] = useState("");

  const onSubmitEditing = () => {
    Keyboard.dismiss();
    setInputValue("");
  };

  console.log(inputValue);

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
