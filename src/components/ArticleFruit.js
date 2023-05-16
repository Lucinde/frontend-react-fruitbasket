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
                <Button
                    buttonType="button"
                    buttonClass="button"
                    handleClick={() => counter(+1)}>
                    +
                </Button>
                <p>{state}</p>
                <Button
                    buttonType="button"
                    buttonClass="button"
                    handleClick={() => counter(-1)}>
                    -
                </Button>
            </article>

        </>
    );
}

export default ArticleFruit;