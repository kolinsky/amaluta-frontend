import React from "react";
import "./SideBarButton.scss"

interface SideBarButtonProp {
    Text: String,
    Icon: React.FC
}

const SideBarButton: React.FC<SideBarButtonProp> = ({Text, Icon}) => {
    return (
        <div className="sideBarButton">
            <Icon />
            <h2>{Text}</h2>
        </div>
    ) ;
}

export default SideBarButton;