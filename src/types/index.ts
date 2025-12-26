export interface Category {
    id: string;
    nome: string;
    cor: string;
}

export interface Task {
    id: string;
    title: string;
    category: Category;
    completed: boolean;
}