import { useColorScheme } from "react-native";

export default function useThemeColor(
  themeColor?: "light" | "dark"
): string | undefined | null {
  const colorFromTheme = themeColor ?? useColorScheme();
  return colorFromTheme;
}
