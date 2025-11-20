import React, { useState } from "react"
import { View, Text, TextInput, Pressable, ScrollView, Modal } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import LanguagePicker from "../../../components/LanguagePicker"
import { useLanguage } from "@/context/LanguageContext"

const Chip = ({ label }: { label: string }) => (
  <View className="rounded-xl bg-purple-100 px-4 py-2 mr-2 mb-2">
    <Text className="text-black">{label}</Text>
  </View>
)

const ObservationScreen = () => {
  const router = useRouter()
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [langOpen, setLangOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  return (
    <View className="flex-1 bg-white px-4 pt-4">
      {/* Language selector */}
      <View className="items-end">
        <Pressable
          className="flex-row items-center rounded-xl border border-gray-300 px-3 py-2 bg-white"
          onPress={() => setLangOpen(true)}
        >
          <Text className="text-black mr-2">{language}</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#555" />
        </Pressable>
      </View>

      <Text className="mt-5 mb-3 text-xl text-black">Observation Details</Text>

      <ScrollView className="flex-1" contentContainerClassName="pb-6">
        {/* Observed Location */}
        <View className="mb-4 rounded-xl bg-purple-100">
          <TextInput
            placeholder="Observed Location"
            placeholderTextColor="#000"
            value={location}
            onChangeText={setLocation}
            className="px-4 py-3 text-black"
          />
          <View className="h-[1px] bg-gray-400" />
        </View>

        {/* Description */}
        <View className="mb-4 rounded-xl bg-purple-100">
          <TextInput
            placeholder="Description"
            placeholderTextColor="#000"
            value={description}
            onChangeText={setDescription}
            className="px-4 py-3 text-black"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
          <View className="h-[1px] bg-gray-400" />
        </View>

        {/* Observed Date */}
        <View className="mb-6 rounded-xl bg-purple-100">
          <TextInput
            placeholder="Observed Date"
            placeholderTextColor="#000"
            value={date}
            onChangeText={setDate}
            className="px-4 py-3 text-black"
          />
          <View className="h-[1px] bg-gray-400" />
        </View>

        {/* Chips */}
        <View className="flex-row flex-wrap mb-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Chip key={i} label="Label" />
          ))}
        </View>
      </ScrollView>

      {/* Bottom buttons */}
      <View className="mb-6 flex-row justify-between">
        <Pressable className="rounded-xl bg-gray-300 py-4 px-6" onPress={() => router.back()}>
          <Text className="text-black tracking-widest">PREVIOUS</Text>
        </Pressable>
        <Pressable className="rounded-xl bg-gray-300 py-4 px-6" onPress={() => router.push("/(dashboard)/home/showcase") }>
          <Text className="text-black tracking-widest">NEXT</Text>
        </Pressable>
      </View>

      <LanguagePicker visible={langOpen} onClose={() => setLangOpen(false)} onSelect={(l) => setLanguage(l as any)} />
    </View>
  )
}

export default ObservationScreen
