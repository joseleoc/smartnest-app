import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    headerContainer: {
        width: "100%",
        position: "relative",
        justifyContent: "center",
        alignContent: "center",
    },
    title: {
        textAlign: "center",
    },

    backButton: {
        backgroundColor: "transparent",
        position: "absolute",
        left: 0,
    }
});