import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  Inter_900Black,
  useFonts,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_900Black,
    Inter_600SemiBold,
    Inter_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          "linear-gradient(to bottom, rgba(6, 4, 12, 1) 0%, rgba(7, 8, 20, 1) 100%)",
      }}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(onboarding)" />
      </Stack>
    </SafeAreaView>
  );
}
