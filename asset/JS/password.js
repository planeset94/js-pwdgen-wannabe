// Chiedi il Nome
var nombre = prompt('Come ti chiami?');
document.getElementById('nome_utente').innerHTML='Il tuo nome è: '+nombre.toUpperCase();

// chiedi il Cognome
var surName = prompt("Qual'è il tuo cognome?");
document.getElementById('cognome_utente').innerHTML='Il tuo cognome è: '+surName.toUpperCase();
// chiedi il colore preferito
var color = prompt("Qual'è il tuo colore preferito?");
document.getElementById('colore_utente').innerHTML='Il tuo colore preferito è: '+color.toUpperCase();
// Stampa sulla pagina il risultato


// var total= document.getElementById('pass').innerHTML='La tua nuova password è: ' +nombre+surName+color+21;





// Altro Modo 
var total= nombre+surName+color+21;
document.getElementById('pass').innerHTML=total.toLowerCase();
