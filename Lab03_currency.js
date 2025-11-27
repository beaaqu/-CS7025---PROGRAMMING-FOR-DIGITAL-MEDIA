// Fixed exchange rates
const exchange = {
    EUR : {USD: 1.17},
    USD : {EUR: 0.85}
};

function convert (amount, from, to) {
    if (from === to) {
        return amount;
    }
    const rate = exchange[from][to];
    return (amount * rate ).toFixed(2); //2 decimal placess
}

// Create interface for input/output
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask which currency they want to convert from
rl.question("Convert from EUR or USD? (type EUR or USD)", function (fromCurrency) {
    fromCurrency = fromCurrency.toUpperCase();
    // Validation of the input
    if (fromCurrency !=="EUR" && fromCurrency!=="USD") {
        console.log("Invalid currency");
        rl.close();
        return;
    }

    // Test condition
    // if fromCurrency = EUR, then toCurrency = USD
    // (or toCurrency = EUR if condition is false)
    let toCurrency = fromCurrency === "EUR" ? "USD" : "EUR";
    // Ask user for the amount
    rl.question(`Enter amount in ${fromCurrency}:`, function (amountInput){
        let amount = parseFloat(amountInput);

        if (isNaN(amount) || amount <= 0){
        console.log("Invalid amount");
        } else {
                    let result = convert(amount, fromCurrency, toCurrency);
                    console.log(`${amount} ${fromCurrency} = ${result} ${toCurrency}`);
                }

                rl.close();

            })
})