// Задание
// Сделайте поле для ввода имени, а под ним строку "Привет, %name%".
// При вводе текста в поле, должен меняться текст под ним.
// Если имя это "Санчелло", то строка должна быть "Саня, верни долг!!!"
// Рядом с полем для ввода, должна быть кнопка отчистить

import { useState } from 'react';

export function Greeting(props) {
    const [name, setName] = useState('')
    function getName() {
        setName('')
    }
    
    // function checkName() {
    //     if(name==="Санчелло") {
    //         return "Саня, верни долг!!!"
    //     } else {
    //         return `Привет, ${name}`
    //     }
    // }
    return (
        <div>
            <input type="text" value={name} onChange={event => setName(event.target.value)} />
            {/* <div>{checkName()}</div> */}
            <div>{name==="Санчелло" ? "Саня, верни долг!!!" : `Привет, ${name}`}</div>
            <button onClick={getName}>Очистить</button>
        </div>
    )
}