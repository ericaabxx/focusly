import { Text, View, StyleSheet } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';

export function Home() {
    return(
        <Header 
        userName='Erica'
        pendingTask={4}
        />
    )
}