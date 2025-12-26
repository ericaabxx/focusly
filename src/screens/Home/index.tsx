import { styles } from './styles';
import { Header } from '../../components/Header';
import ProgressCard from '../../components/DailyProgress';

export function Home() {
    return (
  <>
    <Header 
      userName="Erica"
      pendingTask={4}
    />
    <ProgressCard completed={4} total={6} />
  </>
);

}