import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { StoreProvider } from "./storeContext";

export default function RootLayout() {
  return (
    <StoreProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="done"
          options={{
            title: "Done task",
            headerLeft: () => (
              <Ionicons
                name="chevron-back"
                size={24}
                color="black"
                onPress={() => router.back()}
              />
            ),
          }}
        />
      </Stack>
    </StoreProvider>
  );
}
