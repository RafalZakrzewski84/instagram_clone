import React from 'react';
import { Text, View, Button } from 'react-native';

function Landing({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button
				title="Register"
				onPress={() => {
					navigation.navigate('register');
				}}
			/>
			<Button
				title="Login"
				onPress={() => {
					navigation.navigate('login');
				}}
			/>
		</View>
	);
}

export default Landing;
