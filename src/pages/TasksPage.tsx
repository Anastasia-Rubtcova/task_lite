import styled from '@emotion/styled';
import { useState } from 'react';

const Title = styled.h1`
color: ${p => p.theme.colors.error};
margin: ${p => p.theme.spacing(3.5)};
`

// export function TasksPage() {
//     const [textInput, setTextInput] = useState('');
//     const [tasks, setTasks] = useState([]);
//     return (
//         <div>
//             <Title>TasksPage</Title>
//             <input
//                 onChange={event => setTextInput(event.target.value)}
//                 type="text"
//                 value={textInput}
//                 placeholder="Введите задачу"
//             />
//         </div>);
// }

