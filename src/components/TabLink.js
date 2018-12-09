import React from 'react';

function TabLink({ id, active, handleClose, handleOpen }) {
    const open = (event) => {
        if (event.target.className === "tablinks__close") {
            return;
        }
        return handleOpen(id);
    };
    return (
        <div className={`tablinks ${active ? "active" : ""}`} onClick={open}>
            <span className="sheet-name">Sheet {id}</span>
            <div className="tablinks__close" onClick={() => handleClose(id)}></div>
        </div>
    )
}

export default TabLink;