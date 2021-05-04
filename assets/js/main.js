/* //chiedi all'utente il suo nome
var nomeUtente = prompt('Inserisci il tuo Nome e Cognome')
document.getElementById('nome').innerHTML = nomeUtente; */


//Chiedi all'utente quanti km vuole percorrere
/* var kmDaPerc = (prompt('Quanti km intendiamo percorrere?'));
console.log(kmDaPerc);
document.getElementById('posto').innerHTML = kmDaPerc; */

//chiedi all'utente l'età
/* var anni = (prompt('Quanti anni avete?'))
console.log(anni);
document.getElementById('eta').innerHTML = anni; */

var under = 18;
var over = 65;
//Sconto
var scontoUnder = 0.17;
var scontoOver = 0.13;
//Prezzo al km
var prezzoKm = 0.21;
var valuta = '€';


if (isNaN(anni)){
    alert('La tua età deve essere un numero');
}

if (anni <= under ){
    console.log(kmDaPerc * scontoUnder);
    document.getElementById('sconto').innerHTML ='Il prezzo da pagare è (sconto giovani -20%)';
    document.getElementById('prezzo').innerHTML = kmDaPerc * scontoUnder.toFixed(2) + ' ' + valuta;
}else if (anni > over){
    console.log(kmDaPerc * scontoOver);
    document.getElementById('sconto').innerHTML ='Il prezzo da pagare è (sconto anziani -40%)';
    document.getElementById('prezzo').innerHTML = kmDaPerc * scontoOver + ' ' + valuta;
}else{
    console.log(kmDaPerc * prezzoKm);
    document.getElementById('prezzo').innerHTML = kmDaPerc * prezzoKm.toFixed(2) + ' ' + valuta;
}


//||||||||||||||||||||||||||||||
