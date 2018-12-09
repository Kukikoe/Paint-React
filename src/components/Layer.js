import React from 'react';

function Layer({ id, active, handleOpen, handleDelete }) {
    const open = (event) => {
        if (event.target.className === "layer__delete") {
            return;
        }
        return handleOpen(id);
    };
    return (
        <div className={`layer ${active ? "active" : ""}`} onClick={open}><span className="layer__number">{id}</span>
            <div className="layer__preview"></div>
            <div className="layer__delete" onClick={() => handleDelete(id)}></div>
        </div>
    );
}

export default Layer;