import React from 'react';

const Card = (props) => {
    const {
        children,
        isCollapsed,
        bgColor,
        isOutline,
        isWidget,
        widgetType
    } = props;

    const cardClass = `card ${isCollapsed} ${bgColor} ${isOutline} ${isWidget} ${widgetType}`;

    return(
        <div className={cardClass}>
            {children}
        </div>

    );
}

Card.defaulProps = {
    isOutline: "",
    isCollapsed: "",
    isWidget: ""
}

export default Card;