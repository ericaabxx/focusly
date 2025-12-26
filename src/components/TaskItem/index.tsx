import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Category } from "../../types";
import { styles } from "./styles";


interface TaskItemProps {
    title: string;
    category: Category
}

export const TaskItem: React.FC<TaskItemProps> = ({title, category}) => {
    const [completed, setCompleted] = useState<boolean>(false);

    return(
        <TouchableOpacity style={styles.container} onPress={() => setCompleted(!completed)} >
            <View style={[styles.checkBox, completed && styles.checkBoxChecked]} >
                {completed && <Ionicons name="checkmark" size={16} color="white" />} 
            </View>

            <View style={styles.text}>
            <Text style={[styles.title, completed && styles.titleCompleted]}>
                {title}
            </Text>            
                <View style={styles.categoryRow}>
                <View style={[styles.dot, {backgroundColor: category.cor}]} />
                <Text style={styles.categoryText}>{category.nome}</Text>
            </View>
            </View>
        </TouchableOpacity>
    );
}