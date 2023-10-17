import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import api from '../api/api'

const Retailer = ({ setRetailer }) => {
  const [retailerId, setRetailerId] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const saveRetailerId = async () => {
    setLoading(true);
    try {
      const retailer = await api.get(`/retailer/${retailerId}`);
      if (retailer) {
        await AsyncStorage.setItem("retailer", retailerId);
        setRetailer(retailerId);
        const language = await AsyncStorage.getItem("selectedLanguage");
        if (language) {
          navigation.navigate("Home");
        } else {
          navigation.navigate("LanguageSelection");
        }
      } else {
        Alert.alert("Retailer not found");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error finding retailer");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Retailer ID"
        keyboardType="numeric"
        value={retailerId}
        onChangeText={setRetailerId}
      />
      <TouchableOpacity style={styles.button} onPress={saveRetailerId}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Save Retailer ID</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    width: "80%",
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Retailer;