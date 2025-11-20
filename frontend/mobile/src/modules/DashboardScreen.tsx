import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, GradientButton, MetricBox, ScreenWrapper } from "../components";
import { colors, gradients, radius, spacing, typography } from "../theme";

const quickActions = [
  { label: "Track Drinks", description: "Add a drink quickly", icon: "wine" },
  { label: "View Calendar", description: "See your month", icon: "calendar-outline" },
  { label: "Fun Fact", description: "Learn something daily", icon: "bulb-outline" },
  { label: "Customize", description: "Style your avatar", icon: "sparkles-outline" },
];

export default function DashboardScreen() {
  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.avatarCard}>
          <Text style={styles.title}>AlcoTrack</Text>
          <View style={styles.avatarBlock}>
            <LinearGradient
              colors={gradients.warmSunrise}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatarRing}
            >
              <View style={styles.avatarInner}>
                <Text style={styles.avatarEmoji}>🙂</Text>
              </View>
            </LinearGradient>
          </View>
          <Text style={styles.subtitle}>“Still winning that liver XP” 🏅</Text>
          <Text style={styles.timer}>Sober time: 03d 14h 22m</Text>
        </Card>

        <View style={styles.metricsRow}>
          <MetricBox
            label="🏅 Streak"
            value="7 days"
            style={styles.metricBox}
          />
          <MetricBox
            label="⚡ Vitality"
            value="Level 5"
            style={styles.metricBox}
          />
          <MetricBox
            label="✨ Medals"
            value="3"
            style={styles.metricBox}
          />
        </View>

        <View style={styles.quickGrid}>
          {quickActions.map((item) => (
            <Card key={item.label} padded style={styles.quickCard}>
              <View style={styles.quickHeader}>
                <Ionicons name={item.icon as any} size={18} color={colors.accent} />
                <Text style={styles.quickLabel}>{item.label}</Text>
              </View>
              <Text style={styles.quickDesc}>{item.description}</Text>
            </Card>
          ))}
        </View>

        <GradientButton
          label="Pledge today to earn a Vitality Medal"
          onPress={() => {}}
          icon={<Feather name="zap" size={16} color={colors.primary} />}
          style={styles.pledgeButton}
        />
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
  title: {
    fontSize: typography.xl,
    fontWeight: typography.weightSemiBold as any,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  avatarCard: {
    alignItems: "center",
  },
  avatarBlock: {
    width: 220,
    height: 220,
    borderRadius: 110,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  avatarRing: {
    width: "100%",
    height: "100%",
    borderRadius: 110,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.md,
  },
  avatarInner: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    backgroundColor: "#FCEFD8",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarEmoji: {
    fontSize: 56,
  },
  subtitle: {
    fontSize: typography.sm,
    color: colors.subtleText,
    marginBottom: spacing.xs,
  },
  timer: {
    fontSize: typography.md,
    fontWeight: typography.weightMedium as any,
    color: colors.primary,
  },
  metricsRow: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  metricBox: {
    flex: 1,
  },
  quickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  quickCard: {
    width: "48%",
  },
  quickHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.xs,
    gap: spacing.xs,
  },
  quickLabel: {
    fontSize: typography.md,
    fontWeight: typography.weightSemiBold as any,
    color: colors.primary,
  },
  quickDesc: {
    fontSize: typography.sm,
    color: colors.mutedText,
  },
  pledgeButton: {
    marginTop: spacing.sm,
  },
});
