import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import ArticleFruit from "./components/ArticleFruit";
import {useForm} from 'react-hook-form';
import FormInput from "./components/FormInput";

function App() {

    const [amountStrawberry, setAmountStrawberry] = useState(0);
    const [amountBanana, setAmountBanana] = useState(0);
    const [amountApple, setAmountApple] = useState(0);
    const [amountKiwi, setAmountKiwi] = useState(0);

    const {register, handleSubmit} = useForm();

    function handleFormSubmit(data) {
        // geen preventDefault meer nodig, dit regelt Hook Form
        console.log(`Aardbeien: ${amountStrawberry} \nBananen: ${amountBanana} \nAppels: ${amountApple} \nKiwi's: ${amountKiwi} \n` , data);
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
                        <FormInput
                            name="firstname"
                            inputType="text"
                            register={register}
                        >
                            Voornaam
                        </FormInput>
                        <FormInput
                            name="lastname"
                            inputType="text"
                            register={register}
                        >
                            Achternaam
                        </FormInput>
                        <FormInput
                            name="age"
                            inputType="number"
                            register={register}
                        >
                            Leeftijd
                        </FormInput>
                        <FormInput
                            name="zip"
                            inputType="text"
                            register={register}
                        >
                            Postcode
                        </FormInput>
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
                                <input type="radio" id="daytime" value="daytime" {...register("delivery-time")}/>
                                Overdag
                            </label>
                            <label htmlFor="evening">
                                <input type="radio" id="daytime" value="evening" {...register("delivery-time")}/>
                                's Avonds
                            </label>
                        </div>
                        <label htmlFor="comments-field" className="comments">
                            Opmerkingen
                            <textarea id="comments-field" cols="20" rows="10" {...register("comments")}></textarea>
                        </label>
                        <FormInput
                            name="subscribe"
                            inputType="checkbox"
                            register={register}
                        >
                            Ik ga akkoord met de voorwaarden
                        </FormInput>
                        <label htmlFor="submit-button">
                            <Button
                                buttonType="submit"
                                buttonClass="button"
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
