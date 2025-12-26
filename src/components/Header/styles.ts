import { StyleSheet } from 'react-native';
import { colors, fonts, spacing } from '../../styles';


export const styles = StyleSheet.create({
    container: {
        height: 250,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: spacing.huge,
        paddingTop: spacing.huge,
        borderBottomEndRadius: spacing.huge,
        borderBottomStartRadius: spacing.huge
    },

    title:{
        fontFamily: fonts.family.bold,
        fontSize: fonts.size.xxl,
        color: colors.card
    },

    subtitle:{
        fontFamily: fonts.family.regular,
        fontSize: fonts.size.sm,
        color: colors.background
    },
    img: {
        width: 32,
        height: 32,
    },

    text: {
        color: "#ffff"
    },
    iconText: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.xs,
        marginBottom: spacing.xl,

    }
})