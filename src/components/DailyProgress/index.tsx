import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { styles } from "./styles"


interface ProgressCardProps {
  completed: number;
  total: number;
}
const ProgressCard = ({completed, total}: ProgressCardProps) => {
    const percentage = Math.round((completed / total) * 100);

    const size = 80;
    const strokeWidht = 8;

    const radius = (size - strokeWidht) / 2;
    const circumference = radius * 2 * Math.PI;
    const progress = circumference - (percentage / 100) * circumference;

    return(
        <View style={styles.card}>
            <View style={styles.chartContainer}>
                <Svg width={size} height={size}>
                    <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={"#e0e0e0"}
                    strokeWidth={strokeWidht}
                    fill="none" />    
                </Svg>    
                <Text style={styles.percentageText} >{percentage}%</Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.title}>Progresso Diário</Text>
                <Text style={styles.subtitle}>{completed} de {total} tarefas</Text>
            </View>
        </View>
    )

}

export default ProgressCard