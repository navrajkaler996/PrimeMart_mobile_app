import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";

import HeaderIcon from "./components/HeaderIcon";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <HeaderIcon />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={AccountScreen}
          options={{
            headerTitle: () => <HeaderIcon />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
