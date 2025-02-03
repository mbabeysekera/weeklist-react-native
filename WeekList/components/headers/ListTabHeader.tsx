import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import useThemeColor from "@/hooks/useThemeColor";
import HeaderIcon, { HeaderIconProps } from "./HeaderIcon";
import HeaderTabs from "../tab/HeaderTabs";

export interface ListTabHeaderProps {
  label: string;
  labelTextSize?: number;
  labelTextWeight?: any;
  icons?: Array<HeaderIconProps>;
  selectedTab: number;
  onTabPress: (tabId: number) => void;
}

const ListTabHeader = ({
  label,
  labelTextSize = 16,
  labelTextWeight = "bold",
  icons,
  selectedTab,
  onTabPress,
}: ListTabHeaderProps) => {
  const themeColor = useThemeColor("light") as keyof typeof Colors;
  const listTabHeaderTabs = [
    {
      label: "This Week",
      id: 0,
      selectedTab,
      onClick: onTabPress,
    },
    {
      label: "Last Week",
      id: 1,
      selectedTab,
      onClick: onTabPress,
    },
    {
      label: "Statistics",
      id: 2,
      selectedTab,
      onClick: onTabPress,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text
          style={[
            { color: Colors[themeColor ?? "light"].appPreview.headerTextColor },
            { fontSize: labelTextSize },
            { fontWeight: labelTextWeight },
          ]}
        >
          {label}
        </Text>
        {icons !== undefined && (
          <View>
            {icons.map((icon, index) => {
              return (
                <HeaderIcon
                  key={index}
                  label={icon.label}
                  isLabelEnabled={icon.isLabelEnabled}
                  iconName={icon.iconName}
                  iconSize={icon.iconSize}
                />
              );
            })}
          </View>
        )}
      </View>
      <HeaderTabs tabs={listTabHeaderTabs} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 8,
    marginBottom: 4,
  },
});

export default ListTabHeader;
