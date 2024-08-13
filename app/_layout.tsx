import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { StoreProvider } from "./storeContext";
import { AppLoading } from "@/components/AppLoading";
import { SnackbarProvider } from "./snackbarContext";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <SnackbarProvider>
      <StoreProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="done"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
        <AppLoading />
      </StoreProvider>
    </SnackbarProvider>
  );
}
