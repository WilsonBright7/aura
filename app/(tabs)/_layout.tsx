import { Tabs } from "expo-router";
import { Platform } from "react-native";
import COLORS from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          ...Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="add-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="bookmark" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}