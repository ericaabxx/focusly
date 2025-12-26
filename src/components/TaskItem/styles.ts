import { StyleSheet } from "react-native";
import { colors } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: 100,
        borderRadius: 15,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    checkBox: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: "#e0e0e0",
        marginRight: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    checkBoxChecked: {
        backgroundColor: "#78c1b3",
        borderColor: "#78c1b3"
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333"
    },
    titleCompleted: {
        textDecorationLine: "line-through",
        color: colors.textSecondary
    },
    text: {
        flexDirection: "column"
    },
    categoryRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 6
    },
    categoryText: {
        fontSize: 12,
        color: "#666"
    }
})