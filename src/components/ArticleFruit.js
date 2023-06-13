import React, {useState} from 'react';
import Button from "./Button";

function ArticleFruit({articleTitle, state, setState}) {
    // const [amount, setAmount] = useState(0);

    function counter(operator) {
        setState(Math.max(state + operator, 0))
    }

    return (
        <>
            <article className="fruit-display">
                <h4>{articleTitle}</h4>
                <div className="fruit-counter">
                    <Button
                        buttonType="button button-counter"
                        buttonClass="button"
                        handleClick={() => counter(+1)}>
                        +
                    </Button>
                    <p className="fruit-amount">{state}</p>
                    <Button
                        buttonType="button button-counter"
                        buttonClass="button"
                        isDisabled={state === 0}
                        handleClick={() => counter(-1)}>
                        -
                    </Button>
                </div>
            </article>

        </>
    );
}

export default ArticleFruit;