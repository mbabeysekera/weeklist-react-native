import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import React from "react";
import useThemeColor from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

export interface LabelNameProps {
  label: string;
  id: number;
  selectedTab: number;
  tabWidthFactor?: number;
  onClick: (tabID: number) => void;
}

const LabelName = ({
  label,
  id,
  selectedTab,
  tabWidthFactor = 1,
  onClick,
}: LabelNameProps) => {
  const themeColor = useThemeColor("light") as keyof typeof Colors;
  const windowWidth = Dimensions.get("window").width;
  return (
    <Pressable onPress={() => onClick(id)}>
      <View
        style={[
          styles.labelNameContainer,
          { width: windowWidth / tabWidthFactor },
          {
            borderBottomColor:
              id === selectedTab
                ? Colors[themeColor ?? "light"].tabHeader.undelineSelectedColor
                : Colors[themeColor ?? "light"].tabHeader
                    .undelineUnselectedColor,
          },
        ]}
      >
        <Text>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  labelNameContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 5,
    paddingVertical: 4,
  },
});

export default { LabelName };
