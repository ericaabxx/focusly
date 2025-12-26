import React from "react";

import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { colors } from "../../styles";
import { styles } from "./styles";

const CategoryList = () => {
    const categories = [
        {id: 1, name: "Todas", cor: colors.textPrimary},
        {id: 2, name: "Trabalho", cor: colors.trabalho},
        {id: 3, name: "Pessoal", cor: colors.pessoal},
        {id: 4, name: "Saúde", cor: colors.saude}
    ];
    
    return(
        <View style={[styles.container]}>
            <Text style={styles.sectionTitle} >Categorias</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
                {categories.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.chip}>
                        <View style={[styles.dot, {backgroundColor: item.cor}]} />
                        <Text style={styles.chipText}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );

}

export default CategoryList;