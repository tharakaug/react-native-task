import { View, Text } from "react-native"
import React from "react"
import { Slot, Stack } from "expo-router"
import "./../global.css"
import { AuthProvider } from "@/context/AuthContext"
import { LoaderProvider } from "@/context/LoaderContext"
import { LanguageProvider } from "@/context/LanguageContext"

const RootLayout = () => {
  return (
    <LoaderProvider>
      <AuthProvider>
        <LanguageProvider>
          <Slot />
        </LanguageProvider>
      </AuthProvider>
    </LoaderProvider>
  )
}

export default RootLayout
