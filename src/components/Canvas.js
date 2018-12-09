import React, { Component } from 'react';
import { getFigure } from '../helpers';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPainting: false
        };
    }

    mouseMoveHandler = (event) => {
        this.props.getCoord(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
        if (this.state.isPainting) {
            const ctx = event.target.getContext('2d');
            ctx.fillStyle = this.props.settings.fillColor;
            ctx.beginPath();
            ctx.arc(
                event.nativeEvent.offsetX - this.props.settings.size / 2,
                event.nativeEvent.offsetY - this.props.settings.size / 2,
                this.props.settings.size,
                50,
                Math.PI * 2,
                true);
            ctx.fill();
           // ctx.fillRect(event.nativeEvent.offsetX - this.props.settings.size / 2, event.nativeEvent.offsetY - this.props.settings.size / 2, this.props.settings.size, this.props.settings.size);

        }
    };

    mouseDownHandler = (event) => {
        if (this.props.settings.mode === "brush") {
            this.setState({isPainting: true});
        }
        if (this.props.settings.mode === "figure") {
            const ctx = event.target.getContext('2d');
            ctx.strokeStyle = this.props.settings.fillColor;
            ctx.fillStyle =this.props.settings.fillColor;
            getFigure(ctx, +this.props.settings.size, this.props.settings.figure, event.nativeEvent.offsetX, event.nativeEvent.offsetY);
        }
    };

    mouseUpHandler = () => {
        this.setState({isPainting: false});
    };

    mouseOutHandler = () => {
        this.setState({isPainting: false});
    };

    clear = (event) => {
        const ctx = event.target.getContext('2d');
        ctx.clearRect(0, 0, event.target.width, event.target.height);
    };

    render() {
        return (
                <canvas
                    className={`canvas ${this.props.active ? "active" : ""}`}
                    onMouseMove={this.mouseMoveHandler}
                    onMouseDown={this.mouseDownHandler}
                    onMouseUp={this.mouseUpHandler}
                    onMouseOut={this.mouseOutHandler}
                    width={document.documentElement.clientWidth - 300}
                    height={document.documentElement.clientHeight - 100}
                    style = {{cursor: this.props.settings.cursor}}
                >
                </canvas>
        );
    }
}

export default Canvas;