

// chiiedere Nome passeggero
var maggiorenne;
var minorenne;
var anziano;
var prezzoBiglietto = 0.21;

/* var scontoMaggiorenne = 0.21 ;
var scontoMinorenne =  0.17;
var scontoAnziano = 0.13;
 */


// questa funzione chiede il nome e lo stampa
function myTicket(){
    var userInputEl = document.getElementById('name').value;  //salva il nome in una var
    //console.log(userInputEl);       //log della var con il nome
    document.getElementById('nome_passeggero').innerHTML = userInputEl;   //mette il valore della var nel id nome passeggero 
}
document.getElementById('generate_ticket_button').addEventListener('click', myTicket) // mette in atto la funzione al click del bottone genera


// Categoria selezionata dall'utente (range eta 
function distanceKm(){
   /*  var scontoMinorenne = userDistanceEl * 0.17; */
    var userDistanceEl = document.getElementById('km').value;
    console.log(userDistanceEl);
    document.getElementById('costo_totale').innerHTML = userDistanceEl;
    var eta = document.getElementById('age').value;
    //console.log(eta);

    console.log(minorenne, maggiorenne, anziano);
    // Prezzo calcolato

    if(eta === "minorenne"){
        document.getElementById('offerta').innerHTML = 'Sconto minorenne';
        document.getElementById('costo_totale').innerHTML = userDistanceEl * 0.17 + '&euro;';
    }else if (eta === "anziano"){
        document.getElementById('offerta').innerHTML = 'Sconto Anziani';
        document.getElementById('costo_totale').innerHTML = userDistanceEl * 0.13 + '&euro;';
    } else {
        document.getElementById('offerta').innerHTML = 'Nessuno sconto';
        document.getElementById('costo_totale').innerHTML = userDistanceEl * 0.21 + '&euro;';
    }
   
}
document.getElementById('generate_ticket_button').addEventListener('click', distanceKm)



// generare un Codice treno (numero casuale tra 90000 e 100000 escluso)
/**
 * 
 * @param {number} min numero minimo del range
 * @param {number} max numero massimo del range
 * @returns {number} numero casuale CP e carrozza
 */

function randomNumber (){
    var CP = Math.floor(Math.random() * (100000 - 90000) + 90000);
    var carrozze = Math.floor(Math.random() * (50 - 1))+ 1;
    console.log('la tua carrozza ?? la ' + carrozze); 
    document.getElementById('codice_cp').innerHTML = CP;
    document.getElementById('carrozza').innerHTML = carrozze;
}

document.getElementById('generate_ticket_button').addEventListener('click', randomNumber); 

document.getElementById('cancel_ticket_button').addEventListener('click', function () {  
    document.getElementById('name').value = "";
    document.getElementById('km').value = "";
    document.getElementById('age').value = "";

    /* document.getElementById('nome_passeggero').value = "";
    document.getElementById('offerta').value = "";
    document.getElementById('carrozza').value = "";
    document.getElementById('codice_cp').value = "";
    document.getElementById('costo_totale').value = ""; */
    

})