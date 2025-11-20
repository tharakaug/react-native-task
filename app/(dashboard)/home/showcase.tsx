import React from "react"
import { View, Text, Pressable, ScrollView, Dimensions } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"

const Chip = ({ label }: { label: string }) => (
  <View className="rounded-xl bg-purple-100 px-4 py-2 mr-2 mb-2">
    <Text className="text-black">{label}</Text>
  </View>
)

const ShowcaseScreen = () => {
  const router = useRouter()

  const { width } = Dimensions.get("window")
  const CARD_GAP = 16
  const SIDE_INSET = 24
  const CARD_WIDTH = width - SIDE_INSET * 2

  return (
    <View className="flex-1 bg-white px-4 pt-4">
      {/* Language selector */}
      <View className="items-end">
        <View className="flex-row items-center rounded-xl border border-gray-300 px-3 py-2 bg-white">
          <Text className="text-black mr-2">English</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#555" />
        </View>
      </View>

      <Text className="mt-5 mb-3 text-xl text-black">Showcase</Text>

      {/* Carousel cards */}
      <View className="mt-2 h-[340px] w-full">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + CARD_GAP}
          decelerationRate="fast"
          contentContainerStyle={{
            paddingHorizontal: SIDE_INSET,
            alignItems: "center"
          }}
        >
          <View style={{ width: CARD_WIDTH, height: 300, marginRight: CARD_GAP }}>
            <View className="flex-1 rounded-3xl bg-gray-200" />
          </View>
          <View style={{ width: CARD_WIDTH, height: 300, marginRight: CARD_GAP }}>
            <View className="flex-1 rounded-3xl bg-gray-300" />
          </View>
          <View style={{ width: CARD_WIDTH, height: 300 }}>
            <View className="flex-1 rounded-3xl bg-gray-400" />
          </View>
        </ScrollView>
      </View>

      {/* Chips */}
      <View className="mt-8 flex-row flex-wrap mb-6 justify-center">
        {Array.from({ length: 6 }).map((_, i) => (
          <Chip key={i} label="Label" />
        ))}
      </View>

      {/* Bottom buttons fixed at bottom */}
      <View className="absolute left-4 right-4 bottom-6 flex-row justify-between">
        <Pressable className="rounded-xl bg-gray-300 py-4 px-6 w-[45%] items-center" onPress={() => router.back()}>
          <Text className="text-black tracking-widest">PREVIOUS</Text>
        </Pressable>
        <Pressable className="rounded-xl bg-gray-300 py-4 px-6 w-[45%] items-center" onPress={() => router.push("/(dashboard)/home/showcase-final") }>
          <Text className="text-black tracking-widest">FINISH</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ShowcaseScreen
