// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

let oneDollarIs = {
    "JPY": oneEuroIs["JPY"] / oneEuroIs["USD"], 
    "EU": 1 / oneEuroIs["USD"],                
    "GBP": oneEuroIs["GBP"] / oneEuroIs["USD"] 
}

let oneYenIs = {
    "USD": 1 / oneDollarIs["JPY"],             
    "EU": 1 / oneEuroIs["JPY"],                
    "GBP": oneEuroIs["GBP"] / oneEuroIs["JPY"] 
}

let onePoundIs = {
    "USD": oneEuroIs["USD"] / oneEuroIs["GBP"], 
    "EU": 1 / oneEuroIs["GBP"],                
    "JPY": oneEuroIs["JPY"] / oneEuroIs["GBP"] 
}

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    
    // Uso la función como debe ser usada
    //const dollars = fromEuroToDollar(3.5);
    const dollars = parseFloat(fromEuroToDollar(3.5).toFixed(2));
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    //const expected = 3.5 * 1.07;
    const expected = parseFloat((3.5 * oneEuroIs["USD"]).toFixed(2));
    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); 
    //expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One Dollar should be 146.26 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = parseFloat(fromDollarToYen(3.5).toFixed(2));
    //const dollars = fromDollarToYen(3.5);

    // Si 1 Dollar son 146.26 yenes, entonces 3.5 Dolares debe ser (3.5 * 146.26)   
    const expected = parseFloat((3.5 * oneDollarIs["JPY"]).toFixed(2));
    //const expected = 511.91;
    //const expected = 3.5 * 146.26;

    // Hago mi comparación (la prueba)
    // 1 dolar son 146.26 yenes, entonces 3.5 dolares deberían ser = (3.5 * 146.26)

    expect(yenes).toBe(expected);
    //expect(fromDollarToYen(3.5)).toBe(expected);
})

test("One Yen should be 0.0055 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = parseFloat(fromYenToPound(3.5).toFixed(2));
    //const pounds = fromYenToPound(3.5);

    const expected = parseFloat((3.5 * oneYenIs["GBP"]).toFixed(2));
    //const expected = 3.5 * 0.0055;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(expected);
    //expect(fromYenToPound(3.5)).toBe(0.01925); 
})
