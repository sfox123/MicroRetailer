import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import items from "../api/comodities";
import Card from "../components/Card";
import CartButton from "../components/CartButton";

export default function BeneficiaryDetails({
  selectedBeneficiary,
  cartItems,
  setSelectedBeneficiary,
  setLanguage,
  language,
  setCartItems,
  handleAddToCart,
}) {
  const navigation = useNavigation();
  const amount = selectedBeneficiary ? selectedBeneficiary.amount : 0;

  const handleCartPress = () => {
    navigation.navigate("Cart");
  };

  // Show confirmation dialog when the user presses the back button
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();

        Alert.alert(
          "Confirm",
          "Are you sure you want to go back?",
          [
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => {},
            },
            {
              text: "Logout",
              style: "destructive",
              onPress: () => {
                setSelectedBeneficiary(null);
                setCartItems([]);
                navigation.dispatch(e.data.action);
              },
            },
          ],
          { cancelable: false }
        );
      });

      return unsubscribe;
    }, [navigation, setSelectedBeneficiary, setCartItems])
  );

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.languageText}>Language:</Text>
        <View style={styles.languageButtons}>
          <Text
            style={[
              styles.languageButton,
              language === "eng" && styles.selectedLanguageButton,
            ]}
            onPress={() => handleLanguageChange("eng")}
          >
            EN
          </Text>
          <Text
            style={[
              styles.languageButton,
              language === "tam" && styles.selectedLanguageButton,
            ]}
            onPress={() => handleLanguageChange("tam")}
          >
            TA
          </Text>
          <Text
            style={[
              styles.languageButton,
              language === "sin" && styles.selectedLanguageButton,
            ]}
            onPress={() => handleLanguageChange("sin")}
          >
            SI
          </Text>
        </View>
      </View>
      <LinearGradient colors={["#007DBC", "#6FB9E8"]} style={styles.card}>
        <Text style={styles.balanceText}>Balance: Rs. {amount.toFixed(2)}</Text>
      </LinearGradient>
      <ScrollView style={styles.scrollView}>
        {items.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <View key={index} style={styles.cardRow}>
                <Card
                  name={item[language]}
                  price={item.price}
                  image={item.image}
                  onAddToCart={handleAddToCart}
                />
                {items[index + 1] && (
                  <Card
                    name={items[index + 1][language]}
                    price={items[index + 1].price}
                    image={items[index + 1].image}
                    onAddToCart={handleAddToCart}
                  />
                )}
              </View>
            );
          }
        })}
      </ScrollView>
      <CartButton
        balance={amount.toFixed(2)}
        onPress={handleCartPress}
        cartItems={cartItems}
      />
      {/* <Logout
        setSelectedBeneficiary={setSelectedBeneficiary}
        setCartItems={setCartItems}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  languageText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  languageButtons: {
    flexDirection: "row",
  },
  languageButton: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 5,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#ccc",
  },
  selectedLanguageButton: {
    backgroundColor: "#007AFF",
    color: "white",
  },
  card: {
    borderRadius: 10,
    padding: 20,
    margin: 20,
    marginTop: 25,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  balanceText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
  scrollView: {
    width: "100%",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
