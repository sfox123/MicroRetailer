// This component is the PIN login screen. It is displayed when the user first launches the app.

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import beneficiariesData from "../api/beneficiaries.json";

export default function Pin({ isOffline, setSelectedBeneficiary }) {
  const navigation = useNavigation();
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // When the user clicks the login button
  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const beneficiary = beneficiariesData.find((b) => b.id === pin);
      if (beneficiary) {
        setSelectedBeneficiary(beneficiary);
        navigation.navigate("BeneficiaryDetails");
      } else {
        Alert.alert("Beneficiary not found");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error finding beneficiary");
    } finally {
      setIsLoading(false);
    }
  };
  // This function checks whether the login button should be disabled
  const isLoginDisabled = () => {
    return pin.length !== 8;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your PIN</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={8}
        value={pin}
        onChangeText={(text) => setPin(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={[styles.button, isLoginDisabled() && styles.disabledButton]}
        onPress={handleLogin}
        disabled={isLoginDisabled()}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: 200,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    padding: 10,
    width: 200,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
