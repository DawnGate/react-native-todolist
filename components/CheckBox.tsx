import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, View } from "react-native";

type Props = {
  handleToggle?: () => void;
  isDone: boolean
};
export const CheckBox = ({ handleToggle, isDone }: Props) => {

  return (
    <TouchableOpacity onPress={handleToggle}>
      <View style={styles.container}>
        {isDone && <Ionicons name="checkmark" size={18} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
