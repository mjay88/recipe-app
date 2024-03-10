import React, { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
	// const favoriteMealsCtx = useContext(FavoritesContext);
	const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

	const favoriteMeals = MEALS.filter((meal) =>
		favoriteMealsIds.includes(meal.id)
	);

	if (favoriteMeals.length === 0) {
		<View style={styles.rootContainer}>
			<Text style={styles.text}>You don't have any favorites yet</Text>
		</View>;
	}
	return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
	},
});
