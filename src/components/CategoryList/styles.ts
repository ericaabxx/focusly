import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 15,
        marginTop: 60
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#000"
    },
    scroll: {
        flexDirection: "row"
    },
    chip: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 10,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 8,
    },
    chipText: {
        fontSize: 14,
        color: "#333",
        fontWeight: "500"
    }
})