import { View, Text } from "react-native";
import React from "react";
import AppHeader from "./card/AppHeader";
import ThisWeekUpdatePageHeader from "./headers/ThisWeekUpdatePageHeader";

const UpdateWeekList = () => {
  return (
    <View>
      <AppHeader name="Lists" size={{ height: 100 }}>
        <ThisWeekUpdatePageHeader />
      </AppHeader>
      <Text>UpdateWeekList</Text>
    </View>
  );
};

export default UpdateWeekList;
