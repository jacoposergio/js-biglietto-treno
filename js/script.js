// Il programma dovrà chiedere all'utente il numero
//  di chilometri 
// che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare
//  il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km 
// (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma
//  umana (con massimo due decimali, per indicare centesimi
//  sul prezzo). Questo richiederà un minimo di ricerca.

// chiedo numero km da percorrere
// chiedo età passeggero
// calcolo prezzo biglietto intero 
    //  0.21 euro x km dati da utente 
// se età > 65 sconto il prezzo intero del 40%
    // se età < 18 sconto il prezzo intero del 20%

// stampo messaggio finale con numeri in forma umana 

// Scelta utente numero di km + conversione in numeri
const travelKm =  parseInt( prompt('Inserisci numero di Km') );
console.log("km inseriti: ", travelKm);

// Richiesta età utente + conversione in numeri
const passengerAge =  parseInt( prompt('Inserire età passeggero') );
console.log("età pass:", passengerAge);

// Calcolo prezzo biglietto intero 
const fullTicket = travelKm * 0.21;
console.log("full:", fullTicket);

// Calcolo biglietto over 65
const ticketOver = fullTicket * 0.6;
console.log("over:", ticketOver);

// Calcolo biglietto under 18
const ticketUnder = fullTicket * 0.8;
console.log("under", ticketUnder);

// se l'età è maggiore di 65 imposto il biglietto scontato al 40%,
// se l'età è minore di 18 imposto il biglietto scontato al 20%,
// altrimenti imposto il biglietto normale

let userMessage;

if (passengerAge > 65) {
    userMessage = 'Il prezzo del biglietto è di ticketOver euro' ;
} else if (passengerAge < 18) {
    userMessage = 'Il prezzo del biglietto è di ticketUnder euro';
} else {
    userMessage = 'Il prezzo del biglietto è di fullTicket euro';
}

// Stampo il messaggio
console.log(userMessage);

document.getElementById('user-message').innerHTML = userMessage;