import styled from '@emotion/styled';
import { useState } from 'react';
import { makeTask } from '../utils/makeTask';

const Title = styled.h1`
color: ${p => p.theme.colors.error};
margin: ${p => p.theme.spacing(3.5)};
`

export function TaskInput() {
    const [textInput, setTextInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('')

    console.log(textInput)
    console.log(tasks)

    function showError() {
        const value = textInput.trim()
        if (value.length === 0) {
            setError('Строка не должна быть пустой')
            return
        } if (value.length >= 50) {
            setError('Строка слишком длинная')
            return
        }
        addTask(value)
        setError('')
        setTextInput('')
    }
    console.log(error)

    function addTask(titleTask) {
        const newTask = makeTask(titleTask);
        //@ts-ignore
        setTasks(prevTasks => [newTask, ...prevTasks]);
    }
    // const randomId = Math.random().toString(36).substring(2)
    // console.log(randomId)
    return (
        <div>
            <Title>TasksPage</Title>
            <input
                onChange={event => {
                    setTextInput(event.target.value);
                }}
                type="text"
                value={textInput}
                placeholder="Введите задачу"
            />
            {error && <div> {error} </div>}
            <ul>
                {tasks.map(task => (
                    <li key={task.id} > {task.title} </li>
                    // <li key={Math.random().toString(36).substring(2)}> {task} </li>

                ))}
            </ul>
            <button onClick={() => showError()}>Добавить</button>
        </div>);
}