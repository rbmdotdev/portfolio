import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NAVIGATORS } from "../utils/screens";

import LandingScreen from "../../screens/HomeScreen";
//import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createNativeStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false
};

const Navigation = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name={NAVIGATORS.LANDING}
				component={LandingScreen}
				options={NAVIGATION_OPTIONS}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default Navigation;