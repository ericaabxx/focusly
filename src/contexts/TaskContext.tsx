import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { Task, Category } from "../types";

interface TaskContextData {
  tasks: Task[];
  addTask: (title: string, category: Category) => void;
  toggleTaskCompleted: (id: string) => void;
}

const TaskContext = createContext({} as TaskContextData);

const STORAGE_KEY = "@focusly:tasks";

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);

  // 🔹 CARREGAR tarefas ao abrir o app
  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }

  async function saveTasks(newTasks: Task[]) {
    setTasks(newTasks);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(title: string, category: Category) {
    const newTask: Task = {
      id: String(Date.now()),
      title,
      category,
      completed: false,
    };

    saveTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    saveTasks(updatedTasks);
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompleted }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
