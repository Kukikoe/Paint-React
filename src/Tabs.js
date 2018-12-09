import React from 'react';
import './css/light-theme.css';
import Canvas from "./Canvas";
import TabLink from "./TabLink";


function Tabs({ tabs, getCoord, onClose, onOpen, onAdd }) {

    return (
        <div className="paint-container">
            <div className="paint-block">
                <div className="tab">
                    {tabs.map(tab => {
                        return (
                            <TabLink
                                id={tab.id}
                                key={tab.id}
                                active={tab.isActive}
                                handleClose={onClose}
                                handleOpen={onOpen}
                            />
                        )
                    })}
                    <div className="tablinks add-tab" onClick={onAdd}>+</div>
                </div>
                <div className="tab-contents" id="tab-contents">
                    {tabs.map(tab => {
                        return (
                            <div key={tab.id} className={`tabcontent ${tab.isActive ? "active" : ""}`}>
                                <Canvas
                                    settings={tab.settings}
                                    getCoord={getCoord}
                                />
                            </div>
                            )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Tabs;