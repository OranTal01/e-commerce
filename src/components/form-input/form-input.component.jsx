import React from 'react';
import './form-input.style.scss';

const FormInput = ({ label, handelChange, ...otherFormInputProps }) => {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={ handelChange }
                { ...otherFormInputProps } />
            { label ?
                (<label
                    className={ `${otherFormInputProps.value ? 'shrink' : ''} form-input-label` }>
                    { label }
                </label>) : null }
        </div>
    );
};

export default FormInput;
