import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import AppHeader from "@/components/card/AppHeader";
import ThisWeekDetailsTabHeader from "@/components/headers/ThisWeekDetailsTabHeader";

const ThisWeekDetailsPage = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "This Element require it to be used under a AppContextProvider."
    );
  }
  const { appContext, setAppContext } = context;
  return (
    <View>
      <AppHeader name="ThisWeekDetails" size={{ height: 100 }}>
        <ThisWeekDetailsTabHeader
          label="This Week List"
          labelTextSize={20}
          labelTextWeight={"bold"}
        />
      </AppHeader>
      <Text>ThisWeekDetailsPage</Text>
    </View>
  );
};

export default ThisWeekDetailsPage;
