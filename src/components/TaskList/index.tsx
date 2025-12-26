import React from "react";
import { FlatList, View, Text } from "react-native";
import {TaskItem} from "../TaskItem"
import { styles } from "./styles";
import { Task } from "../../types";

export interface TaskListProps {
    tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({tasks}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Suas Tarefas</Text>

            <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TaskItem
                title={item.title}
                category={item.category} />
            )} 
            contentContainerStyle={styles.listContent}
            showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default TaskList;