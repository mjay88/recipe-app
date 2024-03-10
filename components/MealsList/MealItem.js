import React from "react";
import {
	View,
	Text,
	Pressable,
	Image,
	StyleSheet,
	Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; //MealItem is not registered as a screen so we must use this hook
import MealDetails from "../MealDetails";
export default function MealItem({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) {
	const navigation = useNavigation();
	function selectMealItemHandler() {
		navigation.navigate("MealDetail", { mealId: id });
	}

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={selectMealItemHandler}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image style={styles.image} source={{ uri: imageUrl }} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "white",
		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible", //makes sure ripple effect does not go beyond rounded corners
	},
	innerContainer: {
		borderRadius: 8,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},

	buttonPressed: {
		opacity: 0.5,
	},
});
