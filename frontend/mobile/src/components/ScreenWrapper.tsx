import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  ViewStyle,
  StatusBar as RNStatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, spacing } from "../theme";
import { StatusBar } from "expo-status-bar";

type ScreenWrapperProps = {
  children: React.ReactNode;
  scrollable?: boolean;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
};

// Provides consistent background, safe-area padding, and optional scrolling.
export function ScreenWrapper({
  children,
  scrollable = false,
  style,
  contentContainerStyle,
}: ScreenWrapperProps) {
  const Container = scrollable ? ScrollView : View;

  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <StatusBar style="dark" />
      <Container
        style={styles.container}
        contentContainerStyle={
          scrollable ? [styles.contentContainer, contentContainerStyle] : undefined
        }
      >
        {children}
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
});
