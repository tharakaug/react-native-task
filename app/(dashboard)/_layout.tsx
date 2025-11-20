import { SafeAreaView } from "react-native"
import React from "react"
import { Tabs } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"

const DashboardLayout = () => {

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Tabs
        screenOptions={{
          headerShown: false
        }}
        tabBar={() => null}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: (data) => (
              <MaterialIcons
                name="home-filled"
                size={data.size}
                color={data.color}
              />
            )
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}

export default DashboardLayout
