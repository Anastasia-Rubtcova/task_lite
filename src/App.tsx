import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { TaskInput } from './components/TaskInput/TaskInput';
import { TasksPage } from './pages/TasksPage/TasksPage';




export function App() {
  
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles/>
      <TasksPage/>
    </ThemeProvider>
  );
}



