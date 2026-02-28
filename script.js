/* 📋 Consegna
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/
const age = prompt("Inserisci la tua età");
const distance = prompt("inserisci i Km da percorrere");
const priceKm = distance * 0.21;
let price;

if (age < 18){
    price = priceKm * 0.20
} else if (age >= 65){
    price = priceKm * 0.40
}

const finalPrice = priceKm - price
console.log(finalPrice);


