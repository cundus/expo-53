import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Platform, SafeAreaView, StatusBar, View } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
import {
   PaperProvider,
   useTheme,
   MD3DarkTheme as DefaultTheme,
} from "react-native-paper";

export default function RootLayout() {
   const [loaded] = useFonts({
      SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
   });

   useEffect(() => {
      if (loaded) {
         SplashScreen.hideAsync();
      }
   }, [loaded]);

   if (!loaded) {
      return null;
   }

   return (
      <PaperProvider theme={{ ...DefaultTheme }}>
         <SafeAreaView style={{ flex: 1 }}>
            <View
               style={{
                  flex: 1,
                  backgroundColor: "#fff",
                  paddingTop:
                     Platform.OS === "android" ? StatusBar.currentHeight : 0,
               }}
            >
               <Stack screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="index" options={{ headerShown: false }} />

                  <Stack.Screen name="+not-found" />
               </Stack>
            </View>
         </SafeAreaView>
      </PaperProvider>
   );
}
