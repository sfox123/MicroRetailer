import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Scanner from "./screens/Scanner";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Pin from "./screens/Pin";
import Print from "./screens/Print";
import BeneficiaryDetails from "./screens/BenDetails";
import CartPage from "./screens/CartPage";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import Loading from "./screens/Loading";
import Retailer from "./screens/Retailer";
import LanguageSelectionScreen from "./screens/Lang";

const Stack = createStackNavigator();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [language, setLanguage] = useState("tam");
  const [retailer, setRetailer] = useState(null);

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
        const retailerCache = await AsyncStorage.getItem("retailer");
        console.log(retailerCache);
        if (lang !== null) {
          setLanguage("tam");
        }
        if (retailer !== null) {
          setRetailer(retailerCache);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getLanguage();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Loading" options={{ headerShown: false }}>
            {(props) => (
              <Loading
                {...props}
                lang={language}
                retailer={retailer}
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
              <Pin {...props} setSelectedBeneficiary={setSelectedBeneficiary} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Retailer" options={{ headerShown: false }}>
            {(props) => <Retailer {...props} setRetailer={setRetailer} />}
          </Stack.Screen>
          <Stack.Screen name="Scanner">
            {(props) => (
              <Scanner
                {...props}
                setSelectedBeneficiary={setSelectedBeneficiary}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Cart">
            {(props) => (
              <CartPage
                {...props}
                cartItems={cartItems}
                setSelectedBeneficiary={setSelectedBeneficiary}
                setCartItems={setCartItems}
                retailer={retailer}
                selectedBeneficiary={selectedBeneficiary}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="BeneficiaryDetails"
            options={{ title: "Beneficiary Details", headerShown: false }}
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
          <Stack.Screen
            name="Print"
            component={Print}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
