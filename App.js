import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Scanner from "./screens/Scanner";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Pin from "./screens/Pin";
import BeneficiaryDetails from "./screens/BenDetails";
import CartPage from "./screens/CartPage";
import { NavigationContainer } from "@react-navigation/native";
import Loading from "./screens/Loading";
import LanguageSelectionScreen from "./screens/Lang"; // Import the new component

const Stack = createStackNavigator();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [language, setLanguage] = useState("tam");
  const [isOffline, setIsOffline] = useState(false);

  const handleAddToCart = (name, quantity, price) => {
    const newItem = { name, quantity, price };
    setCartItems([...cartItems, newItem]);
  };

  const handleRemoveFromCart = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(newCartItems);
  };

  useEffect(() => {
    const getLanguage = async () => {
      try {
        const lang = await AsyncStorage.getItem("selectedLanguage");
        if (lang !== null) {
          setLanguage("tam");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getLanguage();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" options={{ headerShown: false }}>
          {(props) => (
            <Loading
              {...props}
              setIsOffline={setIsOffline}
              lang={language}
              setLanguage={setLanguage}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Pin">
          {(props) => (
            <Pin
              {...props}
              setIsOffline={setIsOffline}
              setSelectedBeneficiary={setSelectedBeneficiary}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Scanner">
          {(props) => (
            <Scanner
              {...props}
              setIsOffline={setIsOffline}
              setSelectedBeneficiary={setSelectedBeneficiary}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {(props) => (
            <CartPage
              {...props}
              cartItems={cartItems}
              isOffline={isOffline}
              setSelectedBeneficiary={setSelectedBeneficiary}
              setCartItems={setCartItems}
              selectedBeneficiary={selectedBeneficiary}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="BeneficiaryDetails"
          options={{ title: "Beneficiary Details" }}
        >
          {(props) => (
            <BeneficiaryDetails
              {...props}
              cartItems={cartItems}
              selectedBeneficiary={selectedBeneficiary}
              setSelectedBeneficiary={setSelectedBeneficiary}
              setCartItems={setCartItems}
              setLanguage={setLanguage}
              handleAddToCart={handleAddToCart}
              language={language}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="LanguageSelection"
          component={LanguageSelectionScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
