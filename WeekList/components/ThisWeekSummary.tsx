import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import InfoBoxCard from "./card/InfoBoxCard";
import useThemeColor from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import PresentageCard from "./card/PresentageCard";
import { Currency } from "@/constants/CurrencyTypes";
import { AppContext } from "@/context/AppContext";

export interface ThisWeekSummaryProps {
  currencyType: string;
  allocatedBudget: number;
  totalExpenses: number;
  remainingItems: number;
  extraPurchased: number;
}

const ThisWeekSummary = ({
  currencyType,
  allocatedBudget,
  totalExpenses,
  remainingItems,
  extraPurchased,
}: ThisWeekSummaryProps) => {
  const themeColor = useThemeColor() as keyof typeof Colors;
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "This Element require it to be used under a AppContextProvider."
    );
  }
  const { appContext, setAppContext } = context;

  useEffect(() => {
    setAppContext({
      ...appContext,
      thisWeek: {
        currencyType,
        allocatedBudget,
        totalExpenses,
        remainingItems,
        extraPurchased,
      },
    });
  }, []);
  const balance =
    appContext.thisWeek.allocatedBudget - appContext.thisWeek.totalExpenses;
  const savingAspercentage =
    (balance / appContext.thisWeek.allocatedBudget) * 100;
  return (
    <InfoBoxCard
      size={{ width: "94%", height: 250 }}
      backgroundColor={
        Colors[themeColor ?? "light"].thisWeekSummary.backGroundColor
      }
    >
      <View style={styles.container}>
        <View style={styles.budgetContainer}>
          <View style={styles.infoColumnContainer}>
            <Text
              style={[
                styles.smallTextFormatter,
                {
                  color:
                    Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                },
              ]}
            >
              Allocated Budget
            </Text>
            <Text
              style={[
                styles.largeTextFormatter,
                {
                  color:
                    Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                },
              ]}
            >
              {`${appContext.thisWeek.currencyType} ${appContext.thisWeek.allocatedBudget}`}
            </Text>
          </View>
          <View style={styles.infoColumnContainer}>
            <Text
              style={[
                styles.smallTextFormatter,
                {
                  color:
                    Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                },
              ]}
            >
              Total Expenses
            </Text>
            <Text
              style={[
                styles.largeTextFormatter,
                {
                  color:
                    Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                },
              ]}
            >
              {`${appContext.thisWeek.currencyType} ${appContext.thisWeek.totalExpenses}`}
            </Text>
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <View style={styles.infoColumnContainer}>
            <Text
              style={[
                styles.smallTextFormatter,
                {
                  color:
                    Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                },
              ]}
            >
              Balance
            </Text>
            <Text
              style={[
                styles.largeTextFormatter,
                {
                  color:
                    Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                },
              ]}
            >
              {`${currencyType} ${balance}`}
            </Text>
          </View>
          <PresentageCard value={savingAspercentage} />
        </View>
        <View style={styles.infoColumnContainer}>
          <View style={styles.extraInfoRowContainer}>
            <Text
              style={[
                styles.smallTextFormatter,
                {
                  color:
                    Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                },
              ]}
            >
              Remaining Items
            </Text>
            <View
              style={[
                styles.extraInfoCount,
                {
                  borderColor:
                    Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                },
              ]}
            >
              <Text
                style={[
                  styles.smallTextFormatter,
                  {
                    color:
                      Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                  },
                ]}
              >
                {appContext.thisWeek.remainingItems}
              </Text>
            </View>
          </View>
          <View style={styles.extraInfoRowContainer}>
            <Text
              style={[
                styles.smallTextFormatter,
                {
                  color:
                    Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                },
              ]}
            >
              Extra Purchased Items
            </Text>
            <View
              style={[
                styles.extraInfoCount,
                {
                  borderColor:
                    Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                },
              ]}
            >
              <Text
                style={[
                  styles.smallTextFormatter,
                  {
                    color:
                      Colors[themeColor ?? "light"].thisWeekSummary.textColor,
                  },
                ]}
              >
                {appContext.thisWeek.extraPurchased}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </InfoBoxCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "96%",
    height: "88%",
    padding: 8,
  },
  budgetContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  infoColumnContainer: {
    flexDirection: "column",
  },
  infoRowContainer: {
    flexDirection: "row",
  },
  extraInfoRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  smallTextFormatter: {
    fontSize: 16,
  },
  largeTextFormatter: {
    fontSize: 24,
    fontWeight: "bold",
  },
  extraInfoCount: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: "50%",
    width: 26,
    height: 26,
  },
});

export default ThisWeekSummary;
