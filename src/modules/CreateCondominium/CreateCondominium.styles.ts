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
    },
    formContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    form: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    inputError: {
        textAlign: "left"
    },
    inputWrapper: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    }
});