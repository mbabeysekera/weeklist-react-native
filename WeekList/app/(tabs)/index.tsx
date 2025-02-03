import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import useThemeColor from "@/hooks/useThemeColor";
import AppHeader from "@/components/card/AppHeader";
import HomePageHeader from "@/components/headers/HomePageHeader";
import ThisWeekSummary from "@/components/ThisWeekSummary";
import LastWeekSummary from "@/components/LastWeekSummary";
import { Link } from "expo-router";
import { AppContextProvider } from "@/context/AppContext";

const homeDetailsDummyData = {
  username: "Buddhika",
  profilePicture: require("../../assets/images/profile-avatar-male.png"),
  recentNote: "You have upcoming list today at: 5.30PM.",
};

const App = () => {
  const themeColor = useThemeColor() as keyof typeof Colors;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            Colors[themeColor ?? "light"].appPreview.backGroundColor,
        },
      ]}
    >
      <AppHeader name="homePage" size={{ height: 150 }}>
        <HomePageHeader
          key={"homePageHeader"}
          label="Welcome to WeekList!"
          labelTextSize={16}
          homeDetails={homeDetailsDummyData}
        />
      </AppHeader>
      <View style={styles.infoContainer}>
        <Link href={"/(tabs)/list"}>
          <View style={styles.infoWithTopicContainer}>
            <Text style={styles.summaryText}>This WeekList Summary</Text>
            <AppContextProvider>
              <ThisWeekSummary
                currencyType="LKR"
                allocatedBudget={15000}
                totalExpenses={10000}
                remainingItems={5}
                extraPurchased={2}
              />
            </AppContextProvider>
          </View>
        </Link>
        <View style={styles.infoWithTopicContainer}>
          <Text style={styles.summaryText}>Last WeekList Summary</Text>
          <LastWeekSummary
            currencyType="LKR"
            allocatedBudget={15000}
            totalExpenses={5000}
            remainingItems={4}
            extraPurchased={6}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexGrow: 1,
    flexDirection: "column",
  },
  infoContainer: {
    flex: 1,
    // flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  infoWithTopicContainer: {
    flexDirection: "column",
    // alignItems: "center",
    width: "100%",
    height: "50%",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 1,
    padding: 1,
  },
  logo: {
    width: 50,
    height: 50,
  },
  appName: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  summaryText: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 12,
  },
});

export default App;
