import React, { Component } from 'react';
import getFigure from './getFigure';

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

            ctx.fillRect(event.nativeEvent.offsetX - this.props.settings.size / 2, event.nativeEvent.offsetY - this.props.settings.size / 2, this.props.settings.size, this.props.settings.size);

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
        console.log(event.target)
        const ctx = event.target.getContext('2d');
        ctx.clearRect(0, 0, event.target.width, event.target.height);
    };

    render() {
        return (
                <canvas
                    onMouseMove={this.mouseMoveHandler}
                    onMouseDown={this.mouseDownHandler}
                    onMouseUp={this.mouseUpHandler}
                    onMouseOut={this.mouseOutHandler}
                    width="1300"
                    height="600"
                    style = {{border: "1px solid black", cursor: this.props.settings.cursor}}
                >
                </canvas>
        );
    }
}

export default Canvas;