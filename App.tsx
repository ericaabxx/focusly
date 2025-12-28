import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from './src/routes/stack.routes';
import { TaskProvider } from "./src/contexts/TaskContext";

export default function App() {
  return (
  <TaskProvider>
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
  </TaskProvider>

  );
}
