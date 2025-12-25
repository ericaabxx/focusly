import { View, Text } from "react-native"
import { styles } from "./styles"; 
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../styles";

export interface HeaderProps {
    userName: string,
    pendingTask: number,
}

export const Header = ({ userName, pendingTask}: HeaderProps) => {
    return(
            <LinearGradient colors={[colors.primary, colors.primaryLight]} style={styles.container}>
            <Text style={styles.title}>Olá, {userName}!</Text>
            <Text style={styles.subtitle} >Você tem {pendingTask} tarefas pendentes</Text>
            </LinearGradient>
    )
}