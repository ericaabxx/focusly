import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { colors } from "../../styles";
import { styles } from "./styles";
import { Category } from "../../types";

interface CategoryListProps {
  selectedCategoryId: string | null;
  onSelectCategory: (category: Category | null) => void;
  showAllOption?: boolean;
  title?: string;
}

const categories: Category[] = [
  { id: "1", nome: "Trabalho", cor: colors.trabalho },
  { id: "2", nome: "Pessoal", cor: colors.pessoal },
  { id: "3", nome: "Saúde", cor: colors.saude },
];

const CategoryList = ({
  selectedCategoryId,
  onSelectCategory,
  showAllOption = true,
  title = "Categorias",
}: CategoryListProps) => {
  return (
   <View style={styles.container}>
  {title && (
    <Text style={styles.sectionTitle}>{title}</Text>
  )}

  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {showAllOption && (
      <TouchableOpacity
        style={[
          styles.chip,
          selectedCategoryId === null &&
            styles.chipSelected,
        ]}
        onPress={() => onSelectCategory(null)}
      >
        <View
          style={[
            styles.dot,
            { backgroundColor: colors.textPrimary },
          ]}
        />
        <Text style={styles.chipText}>Todas</Text>
      </TouchableOpacity>
    )}

    {categories.map(item => (
      <TouchableOpacity
        key={item.id}
        style={[
          styles.chip,
          selectedCategoryId === item.id &&
            styles.chipSelected,
        ]}
        onPress={() => onSelectCategory(item)}
      >
        <View
          style={[
            styles.dot,
            { backgroundColor: item.cor },
          ]}
        />
        <Text style={styles.chipText}>{item.nome}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
</View>
  );
};

export default CategoryList;
