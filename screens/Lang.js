import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const LanguageSelectionScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [logoAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(logoAnimation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [logoAnimation]);

  const handleLanguageSelection = async (language) => {
    setIsLoading(true);
    try {
      await AsyncStorage.setItem("selectedLanguage", language);
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={["#ff6a00", "#ee0979"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <BlurView style={StyleSheet.absoluteFill} tint="light" intensity={10}>
        <View style={styles.container}>
          <Animated.Image
            source={require("../assets/wfp_white_logo.png")}
            style={[
              styles.logo,
              {
                opacity: logoAnimation,
                transform: [
                  {
                    translateY: logoAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [200, 0],
                    }),
                  },
                ],
              },
            ]}
          />
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleLanguageSelection("sin")}
            >
              <Text style={styles.optionText}>සිංහල</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleLanguageSelection("tam")}
            >
              <Text style={styles.optionText}>தமிழ்</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => handleLanguageSelection("eng")}
            >
              <Text style={styles.optionText}>English</Text>
            </TouchableOpacity>
          </View>
          {isLoading && <ActivityIndicator size="large" color="#ffffff" />}
        </View>
      </BlurView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 50,
  },
  optionsContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
    marginBottom: 50,
  },
  optionButton: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LanguageSelectionScreen;
