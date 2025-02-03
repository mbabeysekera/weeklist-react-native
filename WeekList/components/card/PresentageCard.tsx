import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface PresentageCardProps {
  value: number;
}

enum IndicatorColor {
  SUPER = "lightgreen",
  GOOD = "lightskyblue",
  NORMAL = "slategray",
  CRITICAL = "tomato",
}

const PresentageCard = ({ value }: PresentageCardProps) => {
  const indicatorColor =
    value >= 50
      ? IndicatorColor.SUPER
      : value < 50 && value >= 10
      ? IndicatorColor.GOOD
      : value < 10 && value >= 0
      ? IndicatorColor.NORMAL
      : IndicatorColor.CRITICAL;
  return (
    <View style={[styles.container, { backgroundColor: indicatorColor }]}>
      <Text style={styles.valueText}>{`${value.toFixed(0)}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 40,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  valueText: {
    fontWeight: "bold",
    color: "white",
  },
});

export default PresentageCard;
