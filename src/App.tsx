import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { TaskInput } from './components/TaskInput';




export function App() {
  
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles/>
      <TaskInput/>
    </ThemeProvider>
  );
}



