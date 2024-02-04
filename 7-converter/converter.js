console.log(converter(1000, 'RUB', 'BYN'));

function converter(amountOfFunds, currencyOfFunds, targetCurrency) {
    const conversionRate = {USD : 90, EUR : 100, BYN : 28, CNY : 12,};

    if (currencyOfFunds === 'RUB' && conversionRate[targetCurrency]) {
        const newCurrency = amountOfFunds / conversionRate[targetCurrency];
        return newCurrency;
    }
    else {
        return null;
    }
}