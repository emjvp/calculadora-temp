var celcius = document.getElementById('celcius')
var fahrenheit = document.getElementById('fahrenheit')


function changeToFh() {
    // Funcion que convierte los grados celcius a fahrenheit
    var celciusTemp = parseInt(celcius.value) // en esta parte se convierte el valor del input a número

    var fahrenheitTemp = (celciusTemp * 9 / 5) + 32; // usamos la formula para convertir la temperatura

    fahrenheit.value = fahrenheitTemp // cambio el valor del input por la cantidad calculada

}

function changeToC() {
    // Funcion que convierte los grados fahrenheit a celcius
    var fahrenheitTemp = parseInt(fahrenheit.value) // en esta parte se convierte el valor del input a número

    var celciusTemp = (fahrenheitTemp - 32) * 5 / 9; // usamos la formula para convertir la temperatura

    celcius.value = celciusTemp // cambio el valor del input por la cantidad calculada

}