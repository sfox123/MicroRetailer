import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CartButton({ cartItems, onPress }) {
  const cartItemsCount = cartItems.length;

  return (
    <TouchableOpacity style={styles.cartButton} onPress={onPress}>
      <AntDesign name="shoppingcart" size={24} color="#ffffff" />
      {cartItemsCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartItemsCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff6b6b",
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  badge: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 5,
  },
  badgeText: {
    color: "#ff6b6b",
    fontWeight: "bold",
    fontSize: 12,
  },
});
