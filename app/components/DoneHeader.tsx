import { Title } from "@/components/Todo/Title";
import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StoreContext } from "../storeContext";
import { useStoreContext } from "@/hooks/useStoreContext";

export const DoneHeader = () => {
  const { todoItems } = useContext(StoreContext);

  const { deletedAllDoneTodo } = useStoreContext();

  const completedCount =
    todoItems?.filter((item) => item.completedDate).length ?? 0;

  const handleClear = () => {
    deletedAllDoneTodo();
  };

  return (
    <View style={styles.headerContainer}>
      <Title label={`Completed todo (${completedCount})`} />
      {completedCount > 0 && (
        <>
          <View style={styles.divider}></View>
          <TouchableOpacity onPress={handleClear}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  divider: {
    height: 16,
    width: 2,
    backgroundColor: "#404040",
  },
  clearText: {
    color: "#f43f5e",
  },
});
