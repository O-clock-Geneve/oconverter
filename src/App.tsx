import { useState } from 'react';
import './App.css';
import currencies, { ICurrency } from './data/currencies';

export default function App() {

	const [isrounded, setIsRounded] = useState(false)

	const myCurrencies : ICurrency[] = currencies
	const [currentCurrency, setCurrentCurrency] = useState<ICurrency>(myCurrencies[0])

	function handleCurrencyClick(currency : ICurrency) {
		setCurrentCurrency(currency)
	}

	function roundCurrencyClick() {
		setIsRounded(prevState => !prevState)
	}

	return (
		<div className="app">
			<header className="header">
				<h1 className="header__title">Converter</h1>
				<div className="header__value">1 euro</div>
			</header>

			<ul className="currencies">
				{
					myCurrencies.map(currency => 
				<li key={currency.code} className={`currency `}>
					<button onClick={() => handleCurrencyClick(currency)} type="button" className={`currency__button ${currentCurrency.code === currency.code && 'selected'}`}>
						{currency.description}
					</button>
				</li>)
				}
			</ul>

			<footer className="result">
				<div className="result__amount">{isrounded ? currentCurrency.rate.toFixed(2) : currentCurrency.rate}</div>
				<div className="result__currency">{currentCurrency.description}</div>
				<button onClick={roundCurrencyClick} className="result__button" type="button">{isrounded ? 'Désarrondir' : 'Arrondir'}</button>
			</footer>
		</div>
	);
}
