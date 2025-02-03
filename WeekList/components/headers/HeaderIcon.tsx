import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { IconSymbol } from "../ui/IconSymbol";

export interface HeaderIconProps {
  label: string;
  isLabelEnabled: boolean;
  iconName: any;
  iconSize: number;
}

const HeaderIcon = ({
  label,
  isLabelEnabled,
  iconName,
  iconSize,
}: HeaderIconProps) => {
  return (
    <View style={styles.container}>
      <IconSymbol size={iconSize} name={iconName} color={"black"} />
      <Text style={[styles.label, !isLabelEnabled && { display: "none" }]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  label: {
    fontStyle: "normal",
    color: "rgba(0,0,0,0)",
  },
});

export default HeaderIcon;
