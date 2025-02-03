import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export interface ListItemProps {
  listItemPngPath: any;
  itemName: string;
  description: string;
  plannedDate: string;
}

const ListItem = ({
  listItemPngPath,
  itemName,
  description,
  plannedDate,
}: ListItemProps) => {
  return (
    <View style={[styles.container, styles.containerShadow]}>
      <Image source={listItemPngPath} style={styles.listItemIcon} />
      <View>
        <Text style={styles.itemName}>{itemName}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.dateTime}>{plannedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  containerShadow: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    minWidth: "48%",
  },
  listItemIcon: {
    width: 50,
    height: 50,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
  },
  dateTime: {
    fontSize: 10,
    fontWeight: "bold",
    color: "rgba(0,0,0, 0.5)",
  },
});

export default ListItem;
