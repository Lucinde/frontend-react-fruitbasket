import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import ArticleFruit from "./components/ArticleFruit";
import {useForm} from 'react-hook-form';

function App() {

    const [amountStrawberry, setAmountStrawberry] = useState(0);
    const [amountBanana, setAmountBanana] = useState(0);
    const [amountApple, setAmountApple] = useState(0);
    const [amountKiwi, setAmountKiwi] = useState(0);

    const {register, handleSubmit} = useForm();

    function handleFormSubmit(data) {
        // geen preventDefault meer nodig, dit regelt Hook Form
        console.log(data);
    }

    return (
        <>
            <header>
                {/*<h1>Fruitmand bezorgservice</h1>*/}
            </header>
            <main>
                <section className="container">
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
                    >
                        Reset
                    </Button>
                </section>
                <section className="container">
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="form-details">
                        <label htmlFor="firstname-field">
                            Voornaam
                            <input type="text" id="firstname-field" {...register("firstname")}/>
                        </label>
                        <label htmlFor="lastname-field">
                            Achternaam
                            <input type="text" id="lastname-field" {...register("lastname")}/>
                        </label>
                        <label htmlFor="age-field">
                            Leeftijd
                            <input type="number" id="age-field" {...register("age")}/>
                        </label>
                        <label htmlFor="zip-field">
                            Postcode
                            <input type="text" id="zip-field" {...register("zip")}/>
                        </label>
                        <label htmlFor="frequency-field">
                            Bezorgdagen
                            <select id="frequency-field" {...register("frequency")}>
                                <option value="weekly">Iedere week</option>
                                <option value="bi-weekly">Om de week</option>
                                <option value="monthly">Monthly</option>
                            </select>
                        </label>
                        <div className="radio-button">
                            <label htmlFor="daytime">
                                <input type="radio" id="daytime" {...register("time-field")}/>
                                Overdag
                            </label>
                            <label htmlFor="evening">
                                <input type="radio" id="daytime" {...register("time-field")}/>
                                's Avonds
                            </label>
                        </div>
                        <label htmlFor="comments-field" className="comments">
                            Opmerkingen
                            <textarea id="comments-field" cols="20" rows="10" {...register("comments")}></textarea>
                        </label>
                        <label htmlFor="subscribe-field">
                            <input type="checkbox" id="subscribe-field" {...register("subscribe")}/>
                            Ik ga akkoord met de voorwaarden
                        </label>
                        <label htmlFor="submit-button">
                            <Button
                                buttonType="submit"
                                buttonClass="button"
                                handleClick={() => console.log(`
                                Aardbeien: ${amountKiwi}
                                Bananen: ${amountBanana}
                                Appels: ${amountApple}
                                Kiwi's: ${amountKiwi}`)}
                            >
                                Verzend
                            </Button>
                        </label>

                    </form>
                </section>
            </main>
        </>
    );
}

export default App;
