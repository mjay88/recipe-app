import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
export default function MealsOverviewScreen({ route, navigation }) {
	const { categoryId: catId } = route.params;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === catId
		).title;
		navigation.setOptions({ title: categoryTitle });
	}, [navigation, catId]);

	function renderMealItem(itemData) {
		const item = itemData.item;
		const mealItemsProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			complexity: item.complexity,
			affordability: item.affordability,
			duration: item.duration,
		};
		return <MealItem {...mealItemsProps} />;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			></FlatList>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
