import { useState } from 'react';
import './App.css';
import currencies, { ICurrency } from './data/currencies';
import Footer from './component/footer/Footer';
import Currency from './component/currency/Currency';
import Header from './component/header/Header';
import CurrencyList from './component/currencyList/CurrencyList';

export default function App() {

	const myCurrencies : ICurrency[] = currencies
	const [currentCurrency, setCurrentCurrency] = useState<ICurrency>(myCurrencies[0])

	return (
		<div className="app">
			<Header />
			{
				myCurrencies.length > 0 ?
				<CurrencyList>
					{
						myCurrencies.map(currency => <Currency 
							currency={currency} 
							handleCurrencyClick={() => setCurrentCurrency(currency)} 
							currentCurrency={currentCurrency} 
						/>)
					}
				</CurrencyList>:
			<p>Pas de devises dispos pour le moment</p>
			}

			<Footer 
				currentCurrency={currentCurrency}
			/>
		</div>
	);
}
