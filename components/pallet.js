import React from 'react';

import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';

const Pallet = ({H, S, L, selected}) => {
	const bg = `hsl(${H},${S}%,${L}%)`;
	const color = `hsl(${H},${S}%,${(L + 25) % 101}%)`;
	const border = selected ? {borderWidth: 10, borderColor: color} : {};

	return (
		<View
			className="palletContainer"
			style={{
				...styles.palletContainer,
				backgroundColor: bg,
				...border,
			}}>
			<Text style={{...styles.text, color: color}}>{bg}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	palletContainer: {
		backgroundColor: 'grey',
		height: 100,
		padding: 10,
		margin: 15,
		borderRadius: 8,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	text: {
		fontSize: 15,
		fontWeight: '600',
	},
});

export default Pallet;
