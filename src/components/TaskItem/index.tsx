import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Category } from "../../types";
import { styles } from "./styles";
import { useTasks } from "../../contexts/TaskContext";

interface TaskItemProps {
  id: string;
  title: string;
  category: Category;
  completed: boolean;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  id,
  title,
  category,
  completed,
}) => {
  const { toggleTaskCompleted } = useTasks();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toggleTaskCompleted(id)}
    >
      <View
        style={[
          styles.checkBox,
          completed && styles.checkBoxChecked,
        ]}
      >
        {completed && (
          <Ionicons name="checkmark" size={16} color="white" />
        )}
      </View>

      <View style={styles.text}>
        <Text
          style={[
            styles.title,
            completed && styles.titleCompleted,
          ]}
        >
          {title}
        </Text>

        <View style={styles.categoryRow}>
          <View
            style={[
              styles.dot,
              { backgroundColor: category.cor },
            ]}
          />
          <Text style={styles.categoryText}>
            {category.nome}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
