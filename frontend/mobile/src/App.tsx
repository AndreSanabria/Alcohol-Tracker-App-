// src/App.tsx
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigation from "./app/navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}
