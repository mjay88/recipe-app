import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer style={styles.navigationContainer}>
				<Stack.Navigator
					screenOptions={{
						headerBackTitle: "Back",
					}}
				>
					<Stack.Screen
						name="MealsCategories"
						component={CategoriesScreen}
					></Stack.Screen>
					<Stack.Screen
						name="MealsOverviewScreen"
						component={MealsOverviewScreen}
					></Stack.Screen>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	navigationContainer: {
		padding: 16,
	},
});
