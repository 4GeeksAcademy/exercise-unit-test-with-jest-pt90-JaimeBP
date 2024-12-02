// Tasas de conversión
const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
};

const fromEuroToDollar = function(valueInEuro) {
    return parseFloat((valueInEuro * oneEuroIs["USD"]).toFixed(2));
};

const fromDollarToYen = function(valueInDollar) {
    const oneDollarIsJPY = oneEuroIs["JPY"] / oneEuroIs["USD"];
    return parseFloat((valueInDollar * oneDollarIsJPY).toFixed(2));
};

const fromYenToPound = function(valueInYen) {
    const oneYenIsGBP = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    return parseFloat((valueInYen * oneYenIsGBP).toFixed(2));
};


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
//module.exports = { sum };

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


