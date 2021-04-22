// Chiedi il Nome
var nombre = prompt('Come ti chiami?');

// chiedi il Cognome
var surName = prompt("Qual'è il tuo cognome?");
// chiedi il colore preferito
var color = prompt("Qual'è il tuo colore preferito?");

// Stampa sulla pagina il risultato


var total= document.getElementById('pass').innerHTML='La tua nuova password è ' +nombre+surName+color+21;

// Altro Modo 
// var total= nombre+surName+color+21;
// document.getElementById('pass').innerHTML=total;
