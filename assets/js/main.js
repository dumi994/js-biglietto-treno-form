
// Event listenere click del bottone generate
/* document.getElementById("generate_ticket_button").addEventListener('click', function(

    
    var userInputEl = document.getElementById('name');
    var kmInputEl = document.getElementById('km');
    var ageGroupSelectEl = document.getElementById('age')

    var fullPrice = kmInputEl.value * 0.21
    var discuountText = 'Prezzo pieno';

    if(ageGroupSelectEl.value === 'minorenne'){
        fullPrice -= fullPrice * 0.2;
    var discuountText = 'Sconto Minorenne';

    }else if (ageGroupSelectEl.value == 'over 65'){
        fullPrice -= fullPrice * 0.4;
        var discuountText = 'Sconto Minorenne';

)};

        




    var bigliettoEL = document.getElementById(ticket);
    bigliettoEL
    .innerAdjacentHTML('beforeend',
        `<div class="ticket">
            <div>
                  <h3>Nome passeggero</h3>
                  <span>Nome Passeggero ${userInputEl.value}</span>
                  
            </div>
            <div>
                    <h3>Offerta</h3>
                    <span>Offerta ${discuountText}</span>
                   
            </div>
            <div>
                    <h3>Carrozza</h3>
                    <span >  Carrozza ${randomNumber (1, 10)}</span>
                  
            </div>
            <div>
                    <h3>Codice cp</h3>
                   <span> Codice CP ${randomNumber (90000, 100000)}</span>
            </div>
            <div>
                    <h3> Costo del biglietto</h3>
                    <span>${fullPrice.toFixed(2)}</span>
            </div>
        </div>`
    );
 */

// Event listenere click del b ottone cancel

/* document.getElementById('cancel_ticket_button').addEventListener('click', fucntion (){
        userInputEl = document.getElementById('name').value = '';
        kmInputEl = document.getElementById('km').value = '';
        ageGroupSelectEl = document.getElementById('age').value = '';
    
}) */


/* 
function randomNumber (min, max){
    Math.floor(Math.random() * (max - min +1))+ min;
} */

// chiiedere Nome passeggero



function myTicket(){
    var userInputEl = document.getElementById('name').value;  
    console.log(userInputEl);
    document.getElementById('nome_passeggero').innerHTML = userInputEl;    
}
document.getElementById('generate_ticket_button').addEventListener('click', myTicket)

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
    console.log(carrozze); 
    document.getElementById('codice_cp').innerHTML = CP;
    document.getElementById('carrozza').innerHTML = carrozze;
}

document.getElementById('generate_ticket_button').addEventListener('click', randomNumber); 

//document.getElementById('generate_ticket_button').addEventListener('click', carrozzaRandom);

// assegnare Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente




