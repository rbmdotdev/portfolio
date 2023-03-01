import React from "react";
// @ts-expect-error TS(2305): Module '"@react-navigation/bottom-tabs"' has no ex... Remove this comment to see the full error message
import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PropTypes from "prop-types";

import HomeScreen from "../../screens/HomeScreen";
import { BOTTOM_TAB_SCREENS } from "../utils/screens";

const Tab = createNativeBottomTabNavigator();

createNativeBottomTabNavigator
const TAB_SCREEN_OPTIONS = {
	drawerPosition: "right",
	headerLeft: false
};

const BottomTabNavigation = () => {

	return (
		<Tab.Navigator screenOptions={TAB_SCREEN_OPTIONS}>
			<Tab.Screen
				name={BOTTOM_TAB_SCREENS.HOME_SCREEN}
				component={HomeScreen}
				options={{
					tabBarLabel: 'Main'
				}}
			/>
		</Tab.Navigator>
	);
};

BottomTabNavigation.propTypes = {
	navigation: PropTypes.object
};

export default BottomTabNavigation;