import { useState } from 'react';
export function TextAlign(props) {
    const [text, setText] = useState('left')
    function changePosition() {
        if (text === 'left') {
            setText('center')
        } else if (text === 'center') {
            setText('right')
        } else {
            setText('left')
        }
    }

    return (
        <div>
            <h2 style={{ textAlign: text }}>Align me</h2>
            {/* <button onClick={() => setText('left')}>Left</button>
            <button onClick={() => setText('center')}>Center</button> */}
            <button onClick={() => changePosition()}>btn</button>
        </div>
    )
}