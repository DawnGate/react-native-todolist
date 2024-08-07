import { StyleSheet, Text, View } from "react-native";
import { CheckBox } from "../CheckBox";

export const TodoItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Todo Item Long Long Text Todo Item Long Long Text Todo Item Long Long
          Text
        </Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderCurve: "continuous",
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  textContainer: {
    flex: 1,
  },
  checkBoxContainer: {
    flexShrink: 0,
  },
  text: {
    fontSize: 18,
    lineHeight: 20.4,
  },
});
