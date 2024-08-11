import { StoreContext } from "@/app/storeContext";
import { useContext } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export const AppLoading = () => {
  const { loading } = useContext(StoreContext);

  if (!loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffffdd",
    zIndex: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
