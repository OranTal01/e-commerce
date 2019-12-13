import React, { Children } from 'react';
import './custom-button.style.scss';

const CustomButton = ({ children, ...otherButtonProps }) => {
    return (
        <button
            className="custom-button"
            { ...otherButtonProps }>
            { children }
        </button>
    );
};

export default CustomButton;
