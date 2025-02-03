import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import Tab, { LabelNameProps } from "./Tab";

interface HeaderTabsProps {
  tabs: Array<LabelNameProps>;
}

const HeaderTabs = ({ tabs }: HeaderTabsProps) => {
  const numberOfTabs = tabs.length;
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={tabs}
        renderItem={(element) => {
          return (
            <Tab.LabelName
              key={element.index}
              id={element.item.id}
              selectedTab={element.item.selectedTab}
              label={element.item.label}
              tabWidthFactor={numberOfTabs}
              onClick={element.item.onClick}
            />
          );
        }}
        contentContainerStyle={styles.tabStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  tabStyle: {},
  tabUnderlineStyle: {
    flexDirection: "row",
  },
});

export default HeaderTabs;
