import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";
import useThemeColor from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

interface InfoBoxCardProps extends PropsWithChildren {
  size?: any;
  backgroundColor: string;
}

const InfoBoxCard = ({ size, backgroundColor, children }: InfoBoxCardProps) => {
  const themeColor = useThemeColor() as keyof typeof Colors;
  return (
    <View
      style={[
        styles.container,
        size,
        { backgroundColor },
        {
          boxShadow: `0 5 5 0 ${
            Colors[themeColor ?? "light"].appHeader.shadowColor
          }`,
        },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    borderRadius: 20,
  },
});

export default InfoBoxCard;
