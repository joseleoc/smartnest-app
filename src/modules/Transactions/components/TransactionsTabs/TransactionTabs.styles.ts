import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
    },
    tab: {
        borderRadius: 0,
        backgroundColor: "transparent",
        borderBottomWidth: 1,
        borderColor: "transparent"
    },
    buttonShadow: Platform.select({
        ios: {
            shadowOffset: { width: 0, height: 0 },
            shadowColor: "none",
            shadowOpacity: 0,
            borderRadius: 0,
        },
        android: {
            elevation: 0,
            borderRadius: 0,
        },
        default: {},
    }),
});