import React, { useCallback, useState } from "react"
import { View, Text, Pressable, Image, Alert } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import { useRouter } from "expo-router"
import LanguagePicker from "../../../components/LanguagePicker"

const UploadScreen2 = () => {
  const [imageUri, setImageUri] = useState<string | null>(null)
  const router = useRouter()
  const [langOpen, setLangOpen] = useState(false)
  const [lang, setLang] = useState("English")

  const requestPermissionAndPick = useCallback(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== "granted") {
      Alert.alert("Permission required", "Please allow gallery access to select an image.")
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8
    })

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri)
    }
  }, [])

  return (
    <View className="flex-1 bg-white px-4 pt-4">
      {/* Language selector */}
      <View className="items-end">
        <Pressable
          className="flex-row items-center rounded-xl border border-gray-300 px-3 py-2 bg-white"
          onPress={() => setLangOpen(true)}
        >
          <Text className="text-black mr-2">{lang}</Text>
          <MaterialIcons name="arrow-drop-down" size={20} color="#555" />
        </Pressable>
      </View>

      {/* Title */}
      <Text className="mt-5 mb-3 text-black">Add Image 2</Text>

      {/* Image placeholder / preview */}
      <View className="flex-1 items-center">
        <Pressable className="w-full flex-1 rounded-2xl bg-gray-200 items-center justify-center" onPress={requestPermissionAndPick}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} className="w-full h-full rounded-2xl" resizeMode="cover" />
          ) : (
            <>
              <MaterialIcons name="image" size={40} color="#9ca3af" />
              <Text className="mt-2 text-gray-500">Select image from gallery</Text>
            </>
          )}
        </Pressable>
      </View>

      {/* Bottom buttons */}
      <View className="mb-6 flex-row justify-between">
        <Pressable className="rounded-xl bg-gray-300 py-4 px-6" onPress={() => router.back()}>
          <Text className="text-black tracking-widest">PREVIOUS</Text>
        </Pressable>
        <Pressable className="rounded-xl bg-gray-300 py-4 px-6" onPress={() => router.push("/(dashboard)/home/upload3") }>
          <Text className="text-black tracking-widest">NEXT</Text>
        </Pressable>
      </View>

      <LanguagePicker visible={langOpen} onClose={() => setLangOpen(false)} onSelect={setLang} />
    </View>
  )
}

export default UploadScreen2
