import React from "react";
import { Text, View } from "react-native";
import { Button, Error } from "../components/ui";

import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
	const navigation = useNavigation();

	// TODO: This can be removed or changed according to project needs
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: 'Main'
		});
	}, [navigation]);

	return (
// @ts-expect-error TS(2769): No overload matches this call.
		<View className="h-full w-full justify-center px-4">
      <Error error="some crazy error"/>
			<Button
				buttonColor="bg-blue-600"
				textColor="text-white"
				onPress={() => {}}
				label='Change this button'
			/>
// @ts-expect-error TS(2769): No overload matches this call.
			<Text className="text-2xl font-bold text-center mt-8">Todays Date</Text>
// @ts-expect-error TS(2769): No overload matches this call.
			<Text className="text-center text-lg">
				2023-03-01
			</Text>
		</View>
	);
};

export default HomeScreen;