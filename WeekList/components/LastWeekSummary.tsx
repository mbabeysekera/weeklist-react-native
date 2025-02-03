import { View, Text, StyleSheet } from "react-native";
import React from "react";
import useThemeColor from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import InfoBoxCard from "./card/InfoBoxCard";
import PresentageCard from "./card/PresentageCard";
import { Currency } from "@/constants/CurrencyTypes";

export interface LastWeekSummaryProps {
  currencyType: string;
  allocatedBudget: number;
  totalExpenses: number;
  remainingItems: number;
  extraPurchased: number;
}

const LastWeekSummary = ({
  currencyType,
  allocatedBudget,
  totalExpenses,
  remainingItems,
  extraPurchased,
}: LastWeekSummaryProps) => {
  const themeColor = useThemeColor() as keyof typeof Colors;
  const balance = allocatedBudget - totalExpenses;
  const savingAspercentage = (balance / allocatedBudget) * 100;
  return (
    <InfoBoxCard
      size={{ width: "94%", height: 250 }}
      backgroundColor={
        Colors[themeColor ?? "light"].lastWeekSummary.backGroundColor
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
                    Colors[themeColor ?? "light"].lastWeekSummary.textColor,
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
                    Colors[themeColor ?? "light"].lastWeekSummary.textColor,
                },
              ]}
            >
              {`${currencyType} ${allocatedBudget}`}
            </Text>
          </View>
          <View style={styles.infoColumnContainer}>
            <Text
              style={[
                styles.smallTextFormatter,
                {
                  color:
                    Colors[themeColor ?? "light"].lastWeekSummary.textColor,
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
                    Colors[themeColor ?? "light"].lastWeekSummary.textColor,
                },
              ]}
            >
              {`${currencyType} ${totalExpenses}`}
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
                    Colors[themeColor ?? "light"].lastWeekSummary.textColor,
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
                    Colors[themeColor ?? "light"].lastWeekSummary.textColor,
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
                    Colors[themeColor ?? "light"].lastWeekSummary.textColor,
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
                    Colors[themeColor ?? "light"].lastWeekSummary.textColor,
                },
              ]}
            >
              <Text
                style={[
                  styles.smallTextFormatter,
                  {
                    color:
                      Colors[themeColor ?? "light"].lastWeekSummary.textColor,
                  },
                ]}
              >
                {remainingItems}
              </Text>
            </View>
          </View>
          <View style={styles.extraInfoRowContainer}>
            <Text
              style={[
                styles.smallTextFormatter,
                {
                  color:
                    Colors[themeColor ?? "light"].lastWeekSummary.textColor,
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
                    Colors[themeColor ?? "light"].lastWeekSummary.textColor,
                },
              ]}
            >
              <Text
                style={[
                  styles.smallTextFormatter,
                  {
                    color:
                      Colors[themeColor ?? "light"].lastWeekSummary.textColor,
                  },
                ]}
              >
                {extraPurchased}
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

export default LastWeekSummary;
