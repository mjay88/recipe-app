import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
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

	return <MealsList items={displayedMeals} />;
}
