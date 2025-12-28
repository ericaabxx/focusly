import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTasks } from "../../contexts/TaskContext";
import { Category } from "../../types";
import CategoryList from "../../components/CategoryList";

export default function AddTask() {
  const navigation = useNavigation();
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
 const [selectedCategory, setSelectedCategory] =
  useState<Category | null>(null);

<CategoryList
  title="Categoria"
  selectedCategoryId={selectedCategory?.id ?? null}
  onSelectCategory={setSelectedCategory}
  showAllOption={false}
/>
  function handleAddTask() {
    if (!title.trim() || !selectedCategory) return;

    addTask(title, selectedCategory);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Tarefa</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="O que você precisa fazer?"
      />

     <CategoryList
    title="Categoria"
    selectedCategoryId={selectedCategory?.id ?? null}
    onSelectCategory={setSelectedCategory}
    showAllOption={false}
      />

      <TouchableOpacity
        style={[
          styles.button,
          (!title || !selectedCategory) && styles.buttonDisabled,
        ]}
        onPress={handleAddTask}
        disabled={!title || !selectedCategory}
      >
        <Text style={styles.buttonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cancel}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
