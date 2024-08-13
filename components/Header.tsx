import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  showBack?: boolean;
  next?: ReactNode;
};
export const Header = ({ title, showBack = false, next }: Props) => {
  return (
    <View style={styles.container}>
      {showBack && (
        <View>
          <Link href="/" style={styles.backLink}>
            <Ionicons name="chevron-back" size={24} />
          </Link>
        </View>
      )}
      <Text
        style={[
          styles.text,
          !showBack && {
            marginLeft: 20,
          },
        ]}
      >
        {title}
      </Text>
      <View style={styles.navContainer}>{next}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "500",
  },
  navContainer: {
    marginLeft: "auto",
  },
  backLink: {
    padding: 4,
  },
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
});
