import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
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
						headerStyle: { backgroundColor: "#351401" },
						headerTintColor: "white",
						contentStyle: { backgroundColor: "#3f2f25" },
					}}
				>
					<Stack.Screen
						name="MealsCategories"
						component={CategoriesScreen}
						options={{
							title: "All Categories",
						}}
					/>
					<Stack.Screen
						name="MealsOverviewScreen"
						component={MealsOverviewScreen}
						// options={({ route, navigation }) => {
						// 	const catId = route.params.categoryId;
						// 	return { title: catId };
						// }}
					/>
					<Stack.Screen name="MealDetail" component={MealDetailScreen} />
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
