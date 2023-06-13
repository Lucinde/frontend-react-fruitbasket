import React from 'react';

function FormInput({name, inputType, children, register, required, validationSchema, errors}) {
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
                    {required && "*"}
                    <input
                        type={inputType}
                        id={`${name}-field`}
                        name={name}
                        {...register(name, validationSchema)}/>
                </label>
            }
            {errors &&
                <span className="error">{errors[name]?.message}</span>
            }
        </>
    );
}

export default FormInput;