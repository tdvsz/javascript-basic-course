console.log(converter(1000, 'USD', 'RUB'));

function converter(amountOfFunds, currencyOfFunds, targetCurrency) {
    const conversionRate = {'RUB': {'EUR': 0.010, 'USD': 0.011}, 'EUR': {'USD': 1.08, 'RUB': 99.67}, 'USD': {'EUR': 0.93, 'RUB': 92.50}};

    if (conversionRate[currencyOfFunds] && conversionRate[currencyOfFunds][targetCurrency]) {
        const newCurrency = amountOfFunds * conversionRate[currencyOfFunds][targetCurrency];
        return newCurrency;
    }
    else {
        return null;
    }
}