// import { useState } from 'react';

export function Counter(props) {
    console.log(props)
    // const [value, setValue] = useState(999)

    // const addition = () => {
    //     setValue(prevValue => prevValue + 5)
    // }
    // const subtraction = () => {
    //     setValue(prevValue => prevValue - 5)
    // }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button onClick={props.addition} style={{ width: '70px' }}>+5</button>
            <div>{props.value}</div>
            <button onClick={props.subtraction} style={{ width: '70px' }}>-5</button>
        </div>
    )
}