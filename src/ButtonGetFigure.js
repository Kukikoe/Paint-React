import React from 'react';
import oval from "./img/oval.svg";
import squareBlack from "./img/square-black.svg";
import triangle from "./img/triangle.svg";
import hexagon from "./img/hexagon.svg";

function ButtonGetFigure(props) {
    let getFigure = (event) => {
        props.getFigure(event.target.dataset.figure);
    };
    return (
        <div className="dropdown">
            <button className="btn dropbtn">
                <svg fill="#fff"
                     version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 533.333 533.333"
                     xmlSpace="preserve">
                    <path d="M0,0v533.333h533.333V0H0z M500,500H33.333V33.333H500V500z"/>
                </svg>
            </button>
            <div className="dropdown-content" id="dropdown">
                <span data-figure="circle" onClick={getFigure}><img data-figure="circle" src={oval} className="btn-img oval-img"
                                                                    alt="" onClick={getFigure}/></span>
                <span data-figure="square" onClick={getFigure}><img data-figure="square" src={squareBlack} className="btn-img square-black-img"
                                                alt="" onClick={getFigure}/></span>
                <span data-figure="triangle" onClick={getFigure}><img data-figure="triangle" src={triangle} className="btn-img triangle-img"
                                                  alt="" onClick={getFigure}/></span>
                <span data-figure="hexagon" onClick={getFigure}><img data-figure="hexagon" src={hexagon} className="btn-img hexagon-img"
                                                 alt=""onClick={getFigure}/></span>
            </div>
        </div>
    )
}

export default ButtonGetFigure;