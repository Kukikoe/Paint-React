import React from 'react';

function Color({ color, getColor }) {
    const changeColor = (event) => {
        getColor(event.target.value);
    };
    return (
        <span className="color-box">
            <input type="color" id="color" className="color-input" onChange={changeColor} value={color}/>
        </span>
    )
}

export default Color;