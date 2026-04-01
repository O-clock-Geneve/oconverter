import './Footer.css'
import { useState } from "react"
import { ICurrency } from "../../data/currencies"

interface IProps {
    currentCurrency : ICurrency
}

export default function Footer({currentCurrency} : IProps) {

    const [isrounded, setIsRounded] = useState(false)


	function roundCurrencyClick() {
		setIsRounded(prevState => !prevState)
	}

    return 	<footer className="result">
        <div className="result__amount">{isrounded ? currentCurrency.rate.toFixed(2) : currentCurrency.rate}</div>
        <div className="result__currency">{currentCurrency.description}</div>
        <button onClick={roundCurrencyClick} className="result__button" type="button">{isrounded ? 'Désarrondir' : 'Arrondir'}</button>
    </footer>
}