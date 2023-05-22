import React from 'react';

function FormInput({name, inputType, children, register}) {
    return (
        <>
            {/*Als het een checkbox is het label achteraan zetten, anders vooraan*/}
            {inputType === "checkbox" ?
                <label htmlFor={`${name}-field`}>
                    <input
                        type={inputType}
                        id={`${name}-field`}
                        name={name}
                        {...register(name)}/>
                    {children}
                </label>
                :
                <label htmlFor={`${name}-field`}>
                    {children}
                    <input
                        type={inputType}
                        id={`${name}-field`}
                        name={name}
                        {...register(name)}/>
                </label>
            }
        </>
    );
}

export default FormInput;