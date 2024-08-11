import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { StoreProvider } from "./storeContext";
import { AppLoading } from "@/components/AppLoading";
import { SnackbarProvider } from "./snackbarContext";

export default function RootLayout() {
  return (
    <SnackbarProvider>
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
        <AppLoading />
      </StoreProvider>
    </SnackbarProvider>
  );
}
