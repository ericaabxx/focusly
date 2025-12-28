import { Header } from "../../components/Header";
import ProgressCard from "../../components/DailyProgress";
import CategoryList from "../../components/CategoryList";
import TaskList from "../../components/TaskList";
import { FloatingButton } from "../../components/FloatingButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/types";
import { useTasks } from "../../contexts/TaskContext";
import { useState } from "react";
import { Category } from "../../types";
import { styles } from './styles';
import { View } from "react-native";

type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

export function Home() {
  const navigation = useNavigation<HomeNavigationProp>();
  const { tasks } = useTasks();

  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);

  const filteredTasks = selectedCategory
    ? tasks.filter(
        task => task.category.id === selectedCategory.id
      )
    : tasks;

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    task => task.completed
  ).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <>
      <Header pendingTask={pendingTasks} />

      <ProgressCard
        completed={completedTasks}
        total={totalTasks}
      />
      <View style={styles.container}>
      <CategoryList
    selectedCategoryId={selectedCategory?.id ?? null}
    onSelectCategory={setSelectedCategory}
    showAllOption
/>
      </View>

      <TaskList tasks={filteredTasks} />

      <FloatingButton
        onPress={() => navigation.navigate("AddTask")}
      />
    </>
  );
}
