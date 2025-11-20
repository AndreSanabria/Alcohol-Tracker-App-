import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Card, IconButton, ScreenWrapper } from "../components";
import { colors, gradients, radius, spacing, typography } from "../theme";
import { LinearGradient } from "expo-linear-gradient";

const stories = [
  { name: "You", emoji: "😊", isAdd: true },
  { name: "Alex", emoji: "😊" },
  { name: "Max", emoji: "😎" },
  { name: "Pat", emoji: "🤝" },
];

const posts = [
  { author: "Alex", body: "Day 10. No hangover. Still fabulous. 💅", reactions: "👍👏🔥" },
  { author: "Max", body: "Logged 0 oz today. Liver sent a thank-you note 🧾", reactions: "👍😄" },
  { author: "Pat", body: "Tough round — respawn tomorrow 💪", reactions: "👍😊🔥" },
];

export default function CommunityScreen() {
  return (
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Card padded style={styles.headerCard}>
          <Text style={styles.headerTitle}>Community</Text>
          <Text style={styles.headerSubtitle}>Stories + posts + reactions</Text>
        </Card>

        <View style={styles.storiesRow}>
          {stories.map((story) => (
            <View key={story.name} style={styles.storyItem}>
              <LinearGradient
                colors={story.isAdd ? gradients.purplePink : gradients.warmSunrise}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.storyRing}
              >
                <View style={styles.storyInner}>
                  <Text style={styles.storyEmoji}>{story.emoji}</Text>
                </View>
              </LinearGradient>
              <Text style={styles.storyName}>{story.name}</Text>
            </View>
          ))}
        </View>

        <View style={styles.feed}>
          {posts.map((post) => (
            <Card key={post.author} padded style={styles.postCard}>
              <Text style={styles.postAuthor}>{post.author}</Text>
              <Text style={styles.postBody}>{post.body}</Text>
              <Text style={styles.postReactions}>{post.reactions}</Text>
            </Card>
          ))}
        </View>
      </ScrollView>

      <IconButton
        icon={<Ionicons name="add" size={24} color={colors.card} />}
        onPress={() => {}}
        style={styles.fab}
      />
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
    gap: spacing.xs,
  },
  headerTitle: {
    fontSize: typography.lg,
    fontWeight: typography.weightSemiBold as any,
    color: colors.primary,
  },
  headerSubtitle: {
    fontSize: typography.sm,
    color: colors.subtleText,
  },
  storiesRow: {
    flexDirection: "row",
    gap: spacing.lg,
    paddingHorizontal: spacing.sm,
  },
  storyItem: {
    alignItems: "center",
    width: 60,
  },
  storyRing: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  storyInner: {
    width: "100%",
    height: "100%",
    borderRadius: 26,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
  },
  storyEmoji: {
    fontSize: 22,
  },
  storyName: {
    marginTop: 6,
    fontSize: typography.sm,
    color: colors.primary,
    textAlign: "center",
  },
  feed: {
    gap: spacing.sm,
  },
  postCard: {
    gap: spacing.xs,
  },
  postAuthor: {
    fontSize: typography.md,
    fontWeight: typography.weightSemiBold as any,
    color: colors.primary,
  },
  postBody: {
    fontSize: typography.sm,
    color: colors.mutedText,
  },
  postReactions: {
    fontSize: typography.sm,
    color: colors.primary,
  },
  fab: {
    position: "absolute",
    bottom: spacing.xxl,
    right: spacing.lg,
  },
});
