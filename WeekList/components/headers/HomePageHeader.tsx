import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import useThemeColor from "@/hooks/useThemeColor";
import { IconSymbol } from "../ui/IconSymbol";

interface HomeDetails {
  username: string;
  profilePicture: any;
  recentNote: string;
}

interface HomePageHeaderProps {
  label: string;
  labelTextSize?: number;
  labelTextWeight?: any;
  homeDetails: HomeDetails;
}

const HomePageHeader = ({
  label,
  labelTextSize = 16,
  labelTextWeight = "bold",
  homeDetails,
}: HomePageHeaderProps) => {
  const themeColor = useThemeColor() as keyof typeof Colors;
  return (
    <View key={label} style={[styles.container]}>
      <View key="infoSection">
        <Text
          style={[
            { fontSize: labelTextSize },
            { fontWeight: labelTextWeight },
            {
              color:
                Colors[themeColor ?? "light"].homePageHeader.welcomeMessageText,
            },
          ]}
        >
          {label}
        </Text>
        <Text
          style={[
            styles.username,
            {
              color: Colors[themeColor ?? "light"].homePageHeader.usernameText,
            },
          ]}
        >
          Hi @{homeDetails.username}!
        </Text>
        <View style={[styles.recentNoteContainer]}>
          <IconSymbol
            name="alarm.fill"
            size={20}
            color={Colors[themeColor ?? "light"].homePageHeader.recentNoteText}
          />
          <Text
            style={[
              styles.recentNote,
              {
                color:
                  Colors[themeColor ?? "light"].homePageHeader.recentNoteText,
              },
            ]}
          >
            {homeDetails.recentNote}
          </Text>
        </View>
      </View>
      <Image
        style={styles.profilePicture}
        source={homeDetails.profilePicture}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  username: {
    fontSize: 30,
    fontWeight: "bold",
  },
  recentNoteContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  recentNote: {
    fontSize: 12,
    fontWeight: "bold",
  },
  profilePicture: {
    width: 72,
    height: 72,
    borderRadius: 50,
  },
});

export default HomePageHeader;
