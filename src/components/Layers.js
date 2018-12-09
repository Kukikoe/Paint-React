import React from 'react';
import Layer from "./Layer";

function Layers({ layers, onOpen, onDelete, onAdd }) {
    return (
        <div className="layers-block">
            <div className="layers-block__layers">
                {layers.map(layer => {
                    return (
                        <Layer
                            id={layer.id}
                            key={layer.id}
                            active={layer.isActive}
                            handleOpen={onOpen}
                            handleDelete={onDelete}
                        />
                    )
                })}
            </div>
            <div className="layers-block__buttons">
                <button className="btn-layers add-layer" data-lang="add" onClick={onAdd}>add</button>
            </div>
        </div>
    );
}

export default Layers;