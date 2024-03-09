import { View, Text, StyleSheet } from "react-native";

export default function Subtitle({ children }) {
	return (
		<View style={styles.subTitleContainer}>
			<Text style={styles.subTitle}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	subTitle: {
		color: "#e2b497",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
	subTitleContainer: {
		borderBottomWidth: 2,
		borderBottomColor: "#e2b497",
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
	},
});
