import React, {Component} from 'react';
import './css/App.css';
import ButtonContainer from "./components/ButtonContainer";
import Tabs from "./components/Tabs";
import { getFigure } from './helpers';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    id: 1,
                    isActive: false,
                    layers: [
                        {
                            id: 1,
                            isActive: false,
                            image: ""
                        },
                        {
                            id: 2,
                            isActive: true,
                            image: ""
                        }
                    ],
                    settings: {
                        fillColor: "#000000",
                        mode: "brush",
                        figure: "",
                        size: 10,
                        cursor: "auto",
                    }
                },
                {
                    id: 2,
                    isActive: true,
                    layers: [
                        {
                            id: 1,
                            isActive: false,
                            image: ""
                        },
                        {
                            id: 2,
                            isActive: true,
                            image: ""
                        }
                    ],
                    settings: {
                        fillColor: "#000000",
                        mode: "brush",
                        figure: "",
                        size: 10,
                        cursor: "auto",
                    }
                }
            ],

            offsetX: "",
            offsetY: "",
        };
    }

    handleBrush = () => {
        const tabs = this.state.tabs.map(tab => {
            if (tab.isActive) {
                tab.settings = {
                    ...tab.settings,
                    mode: "brush",
                    cursor: "auto",
                    figure: ""
                };
            }
            return tab;
        });
        this.setState({tabs});
    };

    getFillColor = (color) => {
        const tabs = this.state.tabs.map(tab => {
            if (tab.isActive) {
                tab.settings = {
                    ...tab.settings,
                    fillColor: color
                };
            }
            return tab;
        });
        this.setState({tabs}, () => {
            this.state.tabs.map(tab => {
                if (tab.isActive) {
                    const { mode, figure, size, fillColor } = tab.settings;
                    if (mode !== "brush") {
                        this.getFigureForCursor(figure, size, fillColor);
                    }
                }
                return tab;
            });
        });
    };

    getSize = (size) => {
        const tabs = this.state.tabs.map(tab => {
            if (tab.isActive) {
                tab.settings = {
                    ...tab.settings,
                    size: size
                };
            }
            return tab;
        });
        this.setState({tabs}, () => {
            this.state.tabs.map(tab => {
                if (tab.isActive) {
                    const { mode, figure, size, fillColor } = tab.settings;
                    if (mode !== "brush") {
                        this.getFigureForCursor(figure, size, fillColor);
                    }
                }
                return tab;
            });
        });
    };

    getFigure = (figure) => {
        this.state.tabs.map(tab => {
            if (tab.isActive) {
                const { size, fillColor } = tab.settings;
                    this.getFigureForCursor(figure, size, fillColor);
            }
            return tab;
        });
    };

    getCoordHandle = (x, y) => {
        this.setState({
            offsetX: x,
            offsetY: y
        });
    };

    openTab = (id) => {
        const tabs = this.state.tabs.map(tab => {
            if (tab.id === id) {
                tab = {
                    ...tab,
                    isActive: true
                };
            } else {
                tab = {
                    ...tab,
                    isActive: false
                };
            }
            return tab;
        });
        this.setState({tabs});
    };

    closeTab = (id) => {
        const tabs = this.state.tabs.filter(tab => tab.id !== id);
        this.setState({tabs}, () => {
            this.openTab(this.state.tabs[this.state.tabs.length - 1].id);
        });
    };

    addTab = () => {
        let id;
        if (this.state.tabs.length) {
            id = this.state.tabs[this.state.tabs.length - 1].id + 1;
        } else {
            id = 1;
        }
        const tab = {
            id,
            isActive: false,
            layers: [],
            settings: {
                fillColor: "#000000",
                mode: "brush",
                figure: "",
                size: 10,
                cursor: "auto",
            }
        };
        const tabs = this.state.tabs.concat(tab);
        this.setState({tabs}, () => {
            this.openTab(id);
        });
    };

    getFigureForCursor = (figure, size, color) => {
        let cursor = document.createElement('canvas');
        let ctxCurs = cursor.getContext('2d');
        cursor.width = +size + 2;
        cursor.height = +size + 2;
        ctxCurs.strokeStyle = color;
        getFigure(ctxCurs, +size, figure, 1, 1);
        const tabs = this.state.tabs.map(tab => {
            if (tab.isActive) {
                tab.settings = {
                    ...tab.settings,
                    figure: figure,
                    mode: "figure",
                    cursor: 'url(' + cursor.toDataURL() + '), auto'
                };
            }
            return tab;
        });
        this.setState({tabs});
    };

    openLayer = (id) => {
        const tabs = this.state.tabs.map(tab => {
            if (tab.isActive) {
                const layers = tab.layers.map(layer => {
                    if (layer.id === id) {
                        layer = {
                            ...layer,
                            isActive: true
                        };
                    } else {
                        layer = {
                            ...layer,
                            isActive: false
                        };
                    }
                    return layer;
                });
                tab.layers = layers;
            }
            return tab;
        });
        this.setState({tabs});
    };

    deleteLayer = (id) => {
        const tabs = this.state.tabs.map(tab => {
            if (tab.isActive) {
                const layers = tab.layers.filter(layer => layer.id !== id);
                tab.layers = layers;
            }
            return tab;
        });
        this.setState({tabs}, () => {
            this.state.tabs.map(tab => {
                if (tab.isActive) {
                    if (tab.layers.length) {
                        this.openLayer(tab.layers[tab.layers.length - 1].id);
                    } else {
                        return;
                    }
                }
                return tab;
            });
        });
    };

    addLayer = () => {

        let id;
        const tabs = this.state.tabs.map(tab => {
            if (tab.isActive) {
                if (tab.layers.length) {
                    id = tab.layers[tab.layers.length - 1].id + 1;
                } else {
                    id = 1;
                }
                const layer = {
                    id,
                    isActive: false,
                    image: ""
                };
                tab.layers = tab.layers.concat(layer);
            }
            return tab;
        });

        this.setState({tabs}, () => {
            this.openLayer(id);
        });
    };

    render() {
        const { tabs } = this.state;
        let activeTab = tabs.filter(tab => tab.isActive)[0];
        if (!activeTab) {
            return null;
        }
        const color = activeTab.settings.fillColor;
        const size = activeTab.settings.size;
        return (
            <div>
                <ButtonContainer
                    x={this.state.offsetX}
                    y={this.state.offsetY}
                    getBrush={this.handleBrush}
                    getColor={this.getFillColor}
                    getSize={this.getSize}
                    getFigure={this.getFigure}
                    color={color}
                    size={size}
                />
                <Tabs
                    onOpen={this.openTab}
                    onClose={this.closeTab}
                    onAdd={this.addTab}
                    tabs={tabs}
                    getCoord={this.getCoordHandle}
                    openLayer={this.openLayer}
                    deleteLayer={this.deleteLayer}
                    addLayer={this.addLayer}
                />
            </div>
        );
    }
}

export default App;
