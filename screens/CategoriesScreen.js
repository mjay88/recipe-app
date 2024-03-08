import { FlatList, StyleSheet, View, SafeAreaView } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

//this function will not be recreated when the CategoriesScreen is re-rendered, performance plus
//navigation prop available on anything registered as a screen in the stack

export default function CategoriesScreen({ navigation }) {
	function renderCategoryItem(itemData) {
		function pressHandler() {
			navigation.navigate("MealsOverviewScreen", {
				categoryId: itemData.item.id, //pass this data as a prop to MealsOverviewScreen
			});
		}
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	}
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<FlatList
					data={CATEGORIES}
					keyExtractor={(item) => item.id}
					renderItem={renderCategoryItem}
					numColumns={2}
				></FlatList>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
