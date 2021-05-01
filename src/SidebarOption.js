import React from "react";
import './SidebarOption.css';

function SidebarOption({active, text, Icon}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon/>
            <h1 className="optionText">{text}</h1>
        </div>
    )
}
export default SidebarOption;