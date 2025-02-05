import { View, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ListItem, { ListItemProps } from "@/components/card/ListItem";
import ListTabHeader from "@/components/headers/ListTabHeader";

import { Colors } from "@/constants/Colors";
import { HeaderIconProps } from "@/components/headers/HeaderIcon";
import AppHeader from "@/components/card/AppHeader";
import useThemeColor from "@/hooks/useThemeColor";
import ThisWeekSummary from "@/components/ThisWeekSummary";
import LastWeekSummary from "@/components/LastWeekSummary";
import { AppContext } from "@/context/AppContext";

const dummyThisWeekLists: ListItemProps[] = [
  {
    listItemPngPath: require("../../assets/images/small-calendar-icon.png"),
    itemName: "Week 1",
    description: "description 1",
    plannedDate: "2025-01-31",
  },
  {
    listItemPngPath: require("../../assets/images/small-calendar-icon.png"),
    itemName: "Week 2",
    description: "description 2",
    plannedDate: "2025-01-31",
  },
  {
    listItemPngPath: require("../../assets/images/small-calendar-icon.png"),
    itemName: "Week 3",
    description: "description 3",
    plannedDate: "2025-01-31",
  },
  {
    listItemPngPath: require("../../assets/images/small-calendar-icon.png"),
    itemName: "Week 4",
    description: "description 4",
    plannedDate: "2025-01-31",
  },
];

const dummyLastWeekLists: ListItemProps[] = [
  {
    listItemPngPath: require("../../assets/images/small-calendar-icon.png"),
    itemName: "Last Week 1",
    description: "description 1",
    plannedDate: "2025-01-31",
  },
  {
    listItemPngPath: require("../../assets/images/small-calendar-icon.png"),
    itemName: "Last Week 2",
    description: "description 2",
    plannedDate: "2025-01-31",
  },
  {
    listItemPngPath: require("../../assets/images/small-calendar-icon.png"),
    itemName: "Last Week 3",
    description: "description 3",
    plannedDate: "2025-01-31",
  },
  {
    listItemPngPath: require("../../assets/images/small-calendar-icon.png"),
    itemName: "Last Week 4",
    description: "description 4",
    plannedDate: "2025-01-31",
  },
];

const headerIconsProps: HeaderIconProps[] = [
  {
    label: "Notification",
    isLabelEnabled: false,
    iconName: "bell.badge.fill",
    iconSize: 20,
  },
];
const List = () => {
  // ToDo: API should load the list for this page
  const themeColor = useThemeColor() as keyof typeof Colors;
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "This Element require it to be used under a AppContextProvider."
    );
  }
  const { appContext, setAppContext } = context;

  const onTabPressHandler = (tabId: number) => {
    setAppContext({ ...appContext, listViewTab: tabId });
  };
  return (
    <View style={styles.container}>
      <AppHeader name="Lists" size={{ height: 100 }}>
        <ListTabHeader
          key="weekListHeader"
          label="Lists"
          icons={headerIconsProps}
          selectedTab={appContext.listViewTab}
          onTabPress={onTabPressHandler}
        />
      </AppHeader>
      {appContext.listViewTab === 0 && (
        <>
          <ThisWeekSummary
            currencyType="LKR"
            allocatedBudget={15000}
            totalExpenses={10000}
            remainingItems={5}
            extraPurchased={2}
          />
          <View style={styles.list}>
            {dummyThisWeekLists.map((listItem, index) => {
              return (
                <ListItem
                  key={index}
                  listItemPngPath={listItem.listItemPngPath}
                  description={listItem.description}
                  itemName={listItem.itemName}
                  plannedDate={listItem.plannedDate}
                />
              );
            })}
          </View>
        </>
      )}
      {appContext.listViewTab === 1 && (
        <>
          <LastWeekSummary
            currencyType="LKR"
            allocatedBudget={15000}
            totalExpenses={5000}
            remainingItems={4}
            extraPurchased={6}
          />
          <View style={styles.list}>
            {dummyLastWeekLists.map((listItem, index) => {
              return (
                <ListItem
                  key={index}
                  listItemPngPath={listItem.listItemPngPath}
                  description={listItem.description}
                  itemName={listItem.itemName}
                  plannedDate={listItem.plannedDate}
                />
              );
            })}
          </View>
        </>
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.light.appPreview.backGroundColor,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
});
