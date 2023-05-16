import React from 'react';

function Button({buttonType, buttonClass, handleClick, children}) {
    return (
        <button
            type={buttonType}
            className={buttonClass}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;