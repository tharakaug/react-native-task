import React from "react"
import { View, Text, Pressable, Dimensions, ScrollView } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

const Chip = ({ label }: { label: string }) => (
  <View className="rounded-xl bg-purple-100 px-4 py-2 mr-2 mb-2">
    <Text className="text-black">{label}</Text>
  </View>
)

const ShowcaseFinalScreen = () => {
  const router = useRouter()
  const { width } = Dimensions.get("window")
  const CARD_GAP = 16
  const SIDE_INSET = 24
  const CARD_WIDTH = width - SIDE_INSET * 2

  return (
    <View className="flex-1 bg-white px-4 pt-4">
      <Text className="mt-5 mb-3 text-xl text-black">Showcase</Text>

      {/* Stacked cards (static preview) */}
      <View className="mt-2 h-[340px] w-full">
        <View className="absolute right-0 left-8 top-6 h-[300px] rounded-3xl bg-gray-400" />
        <View className="absolute right-2 left-4 top-3 h-[300px] rounded-3xl bg-gray-300" />
        <View className="absolute right-6 left-0 top-0 h-[300px] rounded-3xl bg-gray-200" />
      </View>

      {/* Chips */}
      <View className="mt-8 flex-row flex-wrap mb-6 justify-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <Chip key={i} label="Label" />
        ))}
      </View>

      {/* Edit button at bottom right */}
      <View className="absolute right-4 bottom-6">
        <Pressable className="rounded-xl bg-gray-300 py-4 px-10 items-center" onPress={() => router.back()}>
          <Text className="text-black tracking-widest">EDIT</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ShowcaseFinalScreen
