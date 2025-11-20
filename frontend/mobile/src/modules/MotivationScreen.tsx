import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card, ScreenWrapper } from "../components";
import { colors, gradients, radius, spacing, typography } from "../theme";
import { LinearGradient } from "expo-linear-gradient";

const vibes = [
  { title: "Life is Pretty", desc: "You don't need a drink to glow ✨", emoji: "🌸" },
  { title: "Hard Work Pays Off", desc: "Discipline looks damn good on you 💼", emoji: "💪" },
  { title: "Peace of Mind", desc: "Calm is your new superpower 🙏", emoji: "🧘" },
];

const checklist = [
  "10-min workout",
  "Send an apology",
  "2 affirmations",
  "Healthy lunch",
];

export default function MotivationScreen() {
  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.headerCard}>
          <View>
            <Text style={styles.headerTitle}>Motivation</Text>
            <Text style={styles.headerSubtitle}>Pick your vibe</Text>
          </View>
        </Card>

        <View style={styles.vibeList}>
          {vibes.map((vibe, index) => (
            <LinearGradient
              key={vibe.title}
              colors={index === 2 ? gradients.purplePink : gradients.warmSunrise}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.vibeBorder}
            >
              <Card padded style={styles.vibeCard}>
                <Text style={styles.vibeTitle}>
                  {vibe.emoji} {vibe.title}
                </Text>
                <Text style={styles.vibeDesc}>{vibe.desc}</Text>
              </Card>
            </LinearGradient>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Today's feel-good checklist</Text>
        <Card style={styles.checklistCard}>
          {checklist.map((item) => (
            <Pressable
              key={item}
              style={({ pressed }) => [
                styles.checkRow,
                pressed && { opacity: 0.8 },
              ]}
            >
              <Ionicons
                name="checkmark-circle-outline"
                size={22}
                color={colors.accent}
              />
              <Text style={styles.checkText}>{item}</Text>
            </Pressable>
          ))}
        </Card>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
    gap: spacing.lg,
  },
  headerCard: {
    padding: spacing.lg,
  },
  headerTitle: {
    fontSize: typography.lg,
    fontWeight: typography.weightSemiBold as any,
    color: colors.primary,
  },
  headerSubtitle: {
    fontSize: typography.sm,
    color: colors.subtleText,
    marginTop: 2,
  },
  vibeList: {
    gap: spacing.sm,
  },
  vibeBorder: {
    borderRadius: radius.lg,
    padding: 1,
  },
  vibeCard: {
    borderRadius: radius.lg,
  },
  vibeTitle: {
    fontSize: typography.md,
    fontWeight: typography.weightSemiBold as any,
    color: colors.primary,
    marginBottom: 4,
  },
  vibeDesc: {
    fontSize: typography.sm,
    color: colors.mutedText,
  },
  sectionTitle: {
    fontSize: typography.md,
    color: colors.primary,
    fontWeight: typography.weightSemiBold as any,
  },
  checklistCard: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.sm,
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  checkText: {
    fontSize: typography.md,
    color: colors.primary,
  },
});
