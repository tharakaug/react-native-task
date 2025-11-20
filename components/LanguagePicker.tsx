import React from "react"
import { Modal, View, Text, Pressable } from "react-native"

type Props = {
  visible: boolean
  onClose: () => void
  onSelect?: (lang: string) => void
}

const LANGS = ["English", "සිංහල", "தமிழ்"]

const LanguagePicker: React.FC<Props> = ({ visible, onClose, onSelect }) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable className="flex-1 bg-black/30" onPress={onClose}>
        <View className="flex-1 items-center justify-center">
          <Pressable className="w-5/6 rounded-2xl bg-white p-4" onPress={() => {}}>
            <Text className="text-lg font-semibold text-black mb-2 text-center">Select Language</Text>
            {LANGS.map((l, idx) => (
              <Pressable
                key={l}
                className="py-3"
                onPress={() => {
                  onSelect?.(l)
                  onClose()
                }}
              >
                <Text className="text-center text-base text-black">{l}</Text>
                {idx < LANGS.length - 1 ? <View className="mt-2 h-px bg-gray-200" /> : null}
              </Pressable>
            ))}
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  )
}

export default LanguagePicker
