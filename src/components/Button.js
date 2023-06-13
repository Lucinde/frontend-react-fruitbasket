import React from 'react';

function Button({buttonType, buttonClass, handleClick, isDisabled, children}) {
    return (
        <button
            type={buttonType}
            disabled={isDisabled}
            className={buttonClass}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}

export default Button;