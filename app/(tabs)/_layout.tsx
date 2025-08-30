import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: { backgroundColor: '#ffffff' },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: { backgroundColor: '#ffffff', borderTopColor: '#ffffff' },
    }} >
      <Tabs.Screen name="index" options={{
        href: null
      }} />

    </Tabs>
  );
}
