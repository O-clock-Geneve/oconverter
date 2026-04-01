import { useState } from "react"
import { ICurrency } from "../../data/currencies"

interface IProps {
    currency : ICurrency
    handleCurrencyClick : () => void
    currentCurrency : ICurrency
}

export default function Currency({currency, handleCurrencyClick, currentCurrency} : IProps) {

    const [isRateDisplay, setIsRateDisplay] = useState(false)

    function handleCurrencyDisplayClick() {
        setIsRateDisplay(prevState => !prevState)
    }

    return <li key={currency.code} className={`currency `}>
        <button onClick={handleCurrencyClick} type="button" className={`currency__button ${currentCurrency.code === currency.code && 'selected'}`}>
            {currency.description} {isRateDisplay && currency.rate.toFixed(2)}
        </button>
        <button onClick={handleCurrencyDisplayClick} type="button">{isRateDisplay ? '❌' : '👀'}</button>
    </li>
}