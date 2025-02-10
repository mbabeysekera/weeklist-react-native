import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import HeaderIcon from "./HeaderIcon";
import useThemeColor from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

export interface ThisWeekDetailsTabHeaderProps {
  label: string;
  labelTextSize?: number;
  labelTextWeight?: any;
}

const ThisWeekDetailsTabHeader = ({
  label,
  labelTextSize = 16,
  labelTextWeight = "bold",
}: ThisWeekDetailsTabHeaderProps) => {
  const themeColor = useThemeColor("light") as keyof typeof Colors;
  return (
    <View style={styles.container}>
      <Link href={"/(tabs)/list"} asChild>
        <Pressable>
          <HeaderIcon
            label={"BackButton"}
            isLabelEnabled={false}
            iconName={"chevron.left"}
            iconSize={30}
          />
        </Pressable>
      </Link>
      <Text
        style={[
          {
            color: Colors[themeColor ?? "light"].appPreview.headerTextColor,
            fontSize: labelTextSize,
            fontWeight: labelTextWeight,
            position: "absolute",
            left: "33%",
          },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
});

export default ThisWeekDetailsTabHeader;
