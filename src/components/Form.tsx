import { useState } from 'react';

export function Form(props) {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <label>Имя:</label>
                <input type="text" id="name" onChange={event => setName(event.target.value)} value={name} />
            </div>
            <div style={{ display: 'flex' }}>
                <label>Фамилия:</label>
                <input type="text" id="surname" onChange={event => setSurname(event.target.value)} value={surname} />
            </div>
            <div>{name} {surname}</div>
        </div>
    )
}