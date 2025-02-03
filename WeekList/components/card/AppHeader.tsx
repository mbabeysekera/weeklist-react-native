import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";
import useThemeColor from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";

interface AppHeaderSize {
  width?: any;
  height?: any;
}

interface AppHeaderProps extends PropsWithChildren {
  name: string;
  size: AppHeaderSize;
}
const AppHeader = ({
  name,
  size = {
    width: "100%",
    height: 100,
  },
  children,
}: AppHeaderProps) => {
  const themeColor = useThemeColor() as keyof typeof Colors;
  return (
    <View
      key={name}
      style={[
        styles.container,
        {
          backgroundColor:
            Colors[themeColor ?? "light"].appHeader.backgroundColor,
        },
        { width: size.width },
        { height: size.height },
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
    justifyContent: "flex-end",
  },
});

export default AppHeader;
