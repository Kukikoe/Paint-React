import React from 'react';

function Coordinates(props) {
    return (
        <div className="canvas-coordinates">
            <span className="canvas-coord-x">X: <span id="canvasCoordX">{props.x}</span></span>

            <span className="canvas-coord-y">Y: <span id="canvasCoordY">{props.y}</span></span>
        </div>
    )
}

export default Coordinates;