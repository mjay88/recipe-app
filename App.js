import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
//for context
// import FavoritesContextProvider from "./store/context/favorites-context";
// import { FavoritesContext } from "./store/context/favorites-context";
//for redux
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
	function DrawerNavigator() {
		return (
			<Drawer.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: "#351401" },
					headerTintColor: "white",
					sceneContainerStyle: { backgroundColor: "#3f2f25" },
					drawerContentStyle: { backgroundColor: "#351401" },
					drawerInactiveBackgroundColor: "white",
					drawerActiveTintColor: "#351401",
					drawerActiveBackgroundColor: "#efbaa1",
				}}
			>
				<Drawer.Screen
					name="Categories"
					component={CategoriesScreen}
					options={{ title: "All Categories" }}
				/>
				<Drawer.Screen
					name="Favorites"
					component={FavoritesScreen}
					options={{
						drawerIcon: ({ color, size }) => (
							<Ionicons name="star" color={color} size={size}></Ionicons>
						),
					}}
				/>
			</Drawer.Navigator>
		);
	}
	return (
		<>
			<StatusBar style="light" />
			{/* <FavoritesContextProvider> */}
			<Provider store={store}>
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
							name="Drawer"
							component={DrawerNavigator}
							options={{
								headerShown: false,
								drawerIcon: ({ color, size }) => (
									<Ionicons name="list" color={color} size={size}></Ionicons>
								),
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
						<Stack.Screen
							name="MealDetail"
							component={MealDetailScreen}
							// options={{
							// 	headerRight: () => {
							// 		return <Button title="Tap me!"></Button>;
							// 	},
							// }}
							options={{
								title: "About the Meal",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
			{/* </FavoritesContextProvider> */}
		</>
	);
}

const styles = StyleSheet.create({
	navigationContainer: {
		padding: 16,
	},
});
