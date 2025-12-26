import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";


export interface FloatingButtonProps {
    onPress: () => void;
}

export function FloatingButton({onPress}: FloatingButtonProps) {
    return(
        <TouchableOpacity  
        style={styles.fab}
        activeOpacity={0.7}
        onPress={onPress}
        >
        <Ionicons name="add" size={32} color="white" />
        </TouchableOpacity>
    );
}