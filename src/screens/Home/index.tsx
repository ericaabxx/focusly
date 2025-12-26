import { styles } from './styles';
import { Header } from '../../components/Header';
import ProgressCard from '../../components/DailyProgress';
import CategoryList from '../../components/CategoryList';
import TaskList from '../../components/TaskList';
import { FloatingButton } from '../../components/FloatingButton';

export function Home() {

    const tasks = [
  {
    id: "1",
    title: "Arrumar a casa",
    category: { id: "1", nome: "Pessoal", cor: "#f5a623" },
    completed: false,
  },
  {
    id: "2",
    title: "Estudar React Native",
    category: { id: "2", nome: "Estudos", cor: "#4a90e2" },
    completed: false,
  },
];
    return (
  <>
    <Header 
      userName="Erica"
      pendingTask={4}
    />
    <ProgressCard completed={4} total={6} />
    <CategoryList />
    <TaskList tasks={tasks} />
    <FloatingButton onPress={() => console.log("Abrir Modal")} />
  </>
);

}