import { StyleSheet } from "react-native";
import { fonts } from "../../styles";

export const styles = StyleSheet.create({
    card: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        margin: -40,
        zIndex: 10,

    },
    chartContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    percentageText: {
        position: "absolute",
        fontSize: 18,
        fontWeight: "bold",

    },
    infoContainer: {
        marginLeft: 20
    },
    title: {
        fontSize: 18,
        color: "#000",
        fontWeight: "bold"
    },
    subtitle: {
          fontSize: 14,
        color: "#666",
        marginTop:4

    }
})