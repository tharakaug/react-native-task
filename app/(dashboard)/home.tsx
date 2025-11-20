import { View, Text, Pressable } from "react-native"
import React from "react"
import { useRouter } from "expo-router"
import { useLanguage } from "@/context/LanguageContext"

const HomeScreen = () => {
  const router = useRouter()
  const { setLanguage } = useLanguage()
  return (
    <View className="flex-1 w-full bg-gray-300">
      <View className="absolute bottom-0 left-0 right-0">
        <View className="mx-3 mb-3 rounded-t-3xl bg-[#f6f2f7] shadow-lg">
          <View className="items-center pt-2">
            <View className="h-1.5 w-12 rounded-full bg-gray-400" />
          </View>
          <Text className="mt-3 text-center text-base text-black">Select Language</Text>

          <View className="mt-3 border-t border-gray-200" />

          <Pressable
            className="px-5 py-2"
            onPress={() => {
              setLanguage("සිංහල")
              router.push("/(dashboard)/home/upload")
            }}
          >
            <Text className="py-3 text-center text-base text-black">සිංහල</Text>
          </Pressable>
          <View className="mx-4 border-t border-gray-200" />
          <Pressable
            className="px-5 py-2"
            onPress={() => {
              setLanguage("தமிழ்")
              router.push("/(dashboard)/home/upload")
            }}
          >
            <Text className="py-3 text-center text-base text-black">தமிழ்</Text>
          </Pressable>
          <View className="mx-4 border-t border-gray-200" />
          <Pressable
            className="px-5 py-2"
            onPress={() => {
              setLanguage("English")
              router.push("/(dashboard)/home/upload")
            }}
          >
            <Text className="py-3 text-center text-base text-black">English</Text>
          </Pressable>
          <View className="h-3" />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen
