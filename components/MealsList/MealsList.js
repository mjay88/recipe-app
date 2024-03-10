import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
export default function MealsList({ items }) {
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
				data={items}
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
