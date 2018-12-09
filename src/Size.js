import React from 'react';

function Size({ size, getSize }) {

    const changeSize = (event) => {
        getSize(event.target.value);
    };

    return (
        <div className="wrp">
            <input type="range" min="1" max="120" value={size} id="range"
                   onChange={changeSize}/>
            <input className="output" id="output" type="number" value={size} readOnly/>
        </div>
    )
}

export default Size;