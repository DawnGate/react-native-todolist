import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
};
export const Title = ({ label }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
  },
});
