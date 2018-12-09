import React from 'react';
import '../css/light-theme.css';
import Logo from "./Logo";
import ButtonBrush from "./ButtonBrush";
import ButtonClear from "./ButtonClear";
import ButtonGetFigure from "./ButtonGetFigure";
import ButtonSettings from "./ButtonSettings";
import Color from "./Color";
import Size from "./Size";
import Coordinates from "./Coordinates";

function ButtonContainer(props) {
        return (
            <div className="buttons-container">
                <Logo/>
                <ButtonClear/>
                <ButtonBrush getBrush={props.getBrush}/>
                <ButtonGetFigure getFigure={props.getFigure}/>
                <ButtonSettings/>
                <Color getColor={props.getColor} color={props.color}/>
                <Size getSize={props.getSize} size={props.size}/>
                <Coordinates x={props.x} y={props.y}/>
            </div>
        );
}

export default ButtonContainer;
