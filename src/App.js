import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import ArticleFruit from "./components/ArticleFruit";

function App() {

    const [amountStrawberry, setAmountStrawberry] = useState(0);
    const [amountBanana, setAmountBanana] = useState(0);
    const [amountApple, setAmountApple] = useState(0);
    const [amountKiwi, setAmountKiwi] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section className="fruit-container">
                <ArticleFruit
                    articleTitle="🍓 Aardbeien"
                    state={amountStrawberry}
                    setState={setAmountStrawberry}
                />
                <ArticleFruit
                    articleTitle="🍌 Bananen"
                    state={amountBanana}
                    setState={setAmountBanana}
                />
                <ArticleFruit
                    articleTitle="🍏 Appels"
                    state={amountApple}
                    setState={setAmountApple}
                />
                <ArticleFruit
                    articleTitle="🥝 Kiwi's"
                    state={amountKiwi}
                    setState={setAmountKiwi}
                />
                <Button
                    buttonType="button"
                    buttonClass="button"
                    handleClick={() => setAmountStrawberry(0) + setAmountApple(0) + setAmountBanana(0) + setAmountKiwi(0)}
                >Reset</Button>
            </section>
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname-field">
                        Voornaam
                        <input type="text" id="firstname-field" name="firstname" value="firstname" onChange="change"/>
                    </label>
                    <label htmlFor="lastname-field">
                        Achternaam
                        <input type="text" id="lastname-field" name="lastname" value="lastname" onChange="change"/>
                    </label>
                    <label htmlFor="age-field">
                        Leeftijd
                        <input type="number" id="age-field" name="age" value="age" onChange="change"/>
                    </label>
                    <label htmlFor="zip-field">
                        Postcode
                        <input type="number" id="zip-field" name="zip" value="zip" onChange="change"/>
                    </label>
                    <label htmlFor="frequency-field">
                        Bezorgdagen
                        <select name="frequency" id="frequency-field">
                            <option value="weekly">Iedere week</option>
                            <option value="bi-weekly">Om de week</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </label>

                </form>
            </section>
        </>
    );
}

export default App;
