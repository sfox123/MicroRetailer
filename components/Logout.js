import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Logout({ setSelectedBeneficiary, setCartItems }) {
  const navigation = useNavigation();

  const handleLogoutPress = () => {
    setSelectedBeneficiary(null);
    setCartItems([]);
    navigation.navigate("Home");
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutPress}>
      <AntDesign name="logout" size={24} color="#ffffff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    position: "absolute",
    bottom: 25,
    left: 25,
    backgroundColor: "#007DBC",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});
