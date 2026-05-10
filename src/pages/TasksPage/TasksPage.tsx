import { useState } from 'react';
import { TaskInput } from '../../components/TaskInput/TaskInput';
import type { Task } from '../../types/task';
import { makeTask } from '../../utils/makeTask';
import cls from './TasksPage.module.css';
import { TaskList } from '../../components/TaskList/TaskList';


export function TasksPage() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function addTask(titleTask: string) {
        const newTask = makeTask(titleTask);
        setTasks(prevTasks => [newTask, ...prevTasks]);
    }

    function handleToggleTask(id: string) {
        setTasks(prevTasks =>
            prevTasks.map(task => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed }
                }
                return task
            }),
        );
    }

    function handleRemoveTask(id: string) {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== id)
        )
    }

    return (
        <div className={cls.container}>
            <h1 className={cls.title}>TaskLite</h1>
            <TaskInput addTask={addTask} />
            <TaskList onToggle={handleToggleTask} onRemove={handleRemoveTask} tasks={tasks} />
        </div>
    );
}

