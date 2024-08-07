import { Pressable, StyleSheet, View } from "react-native";

export const CheckBox = () => {
  return (
    <Pressable>
      <View style={styles.container}></View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderWidth: 1,
  },
});
