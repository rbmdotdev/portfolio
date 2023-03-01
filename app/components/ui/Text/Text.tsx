import React from "react";

import { StyleSheet, Text as RNText } from "react-native";

import { styled } from "nativewind";

import { TextType } from "./Text.types";

const Text: React.FC<TextType> = ({ textColor, type, onPress, children }) => {
	let textStyle = { ...style.default, ...textColor?.[0] };

	if (type === "title")
// @ts-expect-error TS(2322): Type 'StyleProp<{ color?: string; fontSize: number... Remove this comment to see the full error message
		textStyle = StyleSheet.compose(textStyle, style.title as any);

	if (type === "subtitle")
// @ts-expect-error TS(2322): Type 'StyleProp<{ color?: string; fontSize: number... Remove this comment to see the full error message
		textStyle = StyleSheet.compose(textStyle, style.subtitle as any);

	return (
		<RNText style={textStyle} onPress={onPress}>
			{children && children}
		</RNText>
	);
};

export default styled(Text, {
	props: {
		textColor: true
	}
});

const style = StyleSheet.create({
	title: {
		fontSize: 32,
		fontWeight: "900"
	},
	subtitle: {
		fontSize: 24,
		fontWeight: "600"
	},
	default: {
		fontSize: 16,
		fontWeight: "300"
	}
});
