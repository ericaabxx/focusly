import React from "react";
import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { styles } from "./styles"


interface ProgressCardProps {
  completed: number;
  total: number;
}
const ProgressCard = ({ completed, total }: ProgressCardProps) => {
  const percentage =
  total === 0 ? 0 : Math.round((completed / total) * 100);


  const size = 80;
  const strokeWidth = 8;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference * (1 - percentage / 100);

  return (
    <View style={styles.card}>
      <View style={styles.chartContainer}>
        <Svg width={size} height={size}>
          {/* Círculo base */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e0e0e0"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Círculo de progresso */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#1fa6a0"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>

        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Progresso Diário</Text>
        <Text style={styles.subtitle}>
          {completed} de {total} tarefas
        </Text>
      </View>
    </View>
  );
};

export default ProgressCard