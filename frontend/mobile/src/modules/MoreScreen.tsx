import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card, ScreenWrapper } from "../components";
import { colors, gradients, radius, spacing, typography } from "../theme";

const milestones = ["7d", "30d", "90d", "1y"];

const achievements = [
  "Sober 7 days",
  "First Pledge",
  "Community Contributor",
];

export default function MoreScreen() {
  return (
    <ScreenWrapper>
      <View style={styles.content}>
        <Card padded style={styles.journeyCard}>
          <Text style={styles.sectionLabel}>My Journey</Text>
          <Text style={styles.journeyText}>You • Level 5 • Streak 7</Text>
          <Text style={styles.journeySub}>"Your liver's smiling again 😎"</Text>
        </Card>

        <Card padded style={styles.pledgeCard}>
          <Text style={styles.sectionLabel}>🧘 My Pledge</Text>
          <Text style={styles.muted}>I'm doing this because... (tap to edit)</Text>
          <LinearGradient
            colors={gradients.warmSunrise}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.pledgeUnderline}
          />
        </Card>

        <Card padded style={styles.milestonesCard}>
          <Text style={styles.sectionLabel}>🏆 Milestones</Text>
          <View style={styles.milestoneRow}>
            {milestones.map((m) => (
              <LinearGradient
                key={m}
                colors={gradients.mintSun}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.milestoneBadge}
              >
                <Text style={styles.milestoneText}>{m}</Text>
              </LinearGradient>
            ))}
          </View>
        </Card>

        <Card padded style={styles.savingsCard}>
          <Text style={styles.sectionLabel}>💰 Savings Tracker</Text>
          <View style={styles.progressTrack}>
            <LinearGradient
              colors={gradients.blueTeal}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.progressFill, { width: "70%" }]}
            />
          </View>
          <Text style={styles.progressLabel}>$86 saved</Text>
        </Card>

        <Card padded style={styles.whyCard}>
          <Text style={styles.sectionLabel}>❤️ Why I'm Doing This</Text>
          <Text style={styles.quote}>"To wake up proud and clear-headed."</Text>
        </Card>

        <Card padded style={styles.achievementsCard}>
          <Text style={styles.sectionLabel}>✨ Achievements</Text>
          <Text style={styles.muted}>{achievements.join(" • ")}</Text>
        </Card>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  sectionLabel: {
    fontSize: typography.md,
    fontWeight: typography.weightSemiBold as any,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  journeyCard: {
    gap: spacing.xs,
  },
  journeyText: {
    fontSize: typography.md,
    color: colors.primary,
  },
  journeySub: {
    fontSize: typography.sm,
    color: colors.subtleText,
    marginTop: 2,
  },
  pledgeCard: {
    gap: spacing.sm,
  },
  muted: {
    color: colors.mutedText,
    fontSize: typography.sm,
  },
  pledgeUnderline: {
    height: 4,
    borderRadius: radius.pill,
    marginTop: spacing.xs,
  },
  milestonesCard: {
    gap: spacing.sm,
  },
  milestoneRow: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  milestoneBadge: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  milestoneText: {
    color: colors.primary,
    fontWeight: typography.weightSemiBold as any,
  },
  savingsCard: {
    gap: spacing.sm,
  },
  progressTrack: {
    height: 10,
    borderRadius: radius.pill,
    backgroundColor: "#E8EDF5",
  },
  progressFill: {
    height: "100%",
    borderRadius: radius.pill,
  },
  progressLabel: {
    color: colors.primary,
    fontSize: typography.sm,
  },
  whyCard: {
    gap: spacing.sm,
  },
  quote: {
    color: colors.primary,
    fontSize: typography.sm,
  },
  achievementsCard: {
    gap: spacing.sm,
  },
});
