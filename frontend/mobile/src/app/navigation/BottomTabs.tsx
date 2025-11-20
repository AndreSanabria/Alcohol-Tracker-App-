// src/app/navigation/BottomTabs.tsx
import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DashboardScreen from "../../modules/DashboardScreen";
import MotivationScreen from "../../modules/MotivationScreen";
import CalendarScreen from "../../modules/CalendarScreen";
import CommunityScreen from "../../modules/CommunityScreen";
import MoreScreen from "../../modules/MoreScreen";

export type RootTabParamList = {
  Dashboard: undefined;
  Motivation: undefined;
  Calendar: undefined;
  Community: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const PRIMARY = "#111827";
const MUTED = "#6B7280";
const BG = "#FDF7EE";
const ELEVATED_BG = "#E5E7EB";

type TabButtonProps = {
  label: string;
  icon: React.ReactNode;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  accessibilityLabel?: string;
  testID?: string;
};

const TabButton: React.FC<TabButtonProps> = ({
  label,
  icon,
  isFocused,
  onPress,
  onLongPress,
  accessibilityLabel,
  testID,
}) => {
  const scale = useSharedValue(isFocused ? 1 : 0.96);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0.96, {
      damping: 16,
      stiffness: 220,
    });
  }, [isFocused, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.tabItem, animatedStyle]}>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.tabPressable}
        activeOpacity={0.8}
      >
        {icon}
        <Text style={[styles.label, isFocused && styles.labelFocused]}>
          {label}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const CenterTabButton: React.FC<TabButtonProps> = ({
  label,
  icon,
  isFocused,
  onPress,
  onLongPress,
  accessibilityLabel,
  testID,
}) => {
  const scale = useSharedValue(isFocused ? 1.04 : 1);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1.04 : 1, {
      damping: 14,
      stiffness: 180,
    });
  }, [isFocused, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.centerWrapper}>
      <Animated.View style={animatedStyle}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={accessibilityLabel}
          testID={testID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={styles.centerButton}
          activeOpacity={0.9}
        >
          <View style={styles.centerIconWrapper}>{icon}</View>
          <Text style={[styles.centerLabel, isFocused && styles.labelFocused]}>
            {label}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const basePadding = Platform.OS === "ios" ? 16 : 10;
  const bottomPadding = Math.max(insets.bottom + basePadding, 18);

  return (
    <View style={[styles.tabBarContainer, { paddingBottom: bottomPadding }]}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;
          const isCenter = route.name === "Calendar";

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const icon =
            options.tabBarIcon &&
            options.tabBarIcon({
              focused: isFocused,
              color: isFocused ? PRIMARY : MUTED,
              size: 22,
            });

          if (isCenter) {
            return (
              <CenterTabButton
                key={route.key}
                label={label as string}
                icon={icon}
                isFocused={isFocused}
                onPress={onPress}
                onLongPress={onLongPress}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarButtonTestID}
              />
            );
          }

          return (
            <TabButton
              key={route.key}
              label={label as string}
              icon={icon}
              isFocused={isFocused}
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
            />
          );
        })}
      </View>
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "home-variant" : "home-variant-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Motivation"
        component={MotivationScreen}
        options={{
          tabBarLabel: "Motivation",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sparkles-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarLabel: "Community",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: BG,
    paddingTop: 8,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    alignItems: "center",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabPressable: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
  },
  label: {
    marginTop: 2,
    fontSize: 11,
    color: MUTED,
  },
  labelFocused: {
    color: PRIMARY,
    fontWeight: "600",
  },
  centerWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: ELEVATED_BG,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  centerIconWrapper: {
    marginBottom: 2,
  },
  centerLabel: {
    fontSize: 11,
    color: PRIMARY,
  },
});
