import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

type FloatingButtonProps = TouchableOpacityProps;

export function FloatingButton({ ...rest }: FloatingButtonProps) {
  return (
    <TouchableOpacity style={styles.fab} {...rest}>
      <Ionicons name="add" size={32} color="#FFF" />
    </TouchableOpacity>
  );
}
