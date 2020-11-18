//Istruzioni
//Chiedere all'utente il cognome
//Inserirlo in un array con altri cognomi: ‘Bianchi', ‘Rossi', ‘Duzioni', ‘Balsano', ‘Verdi'
//Stampa la lista ordinata alfabeticamente
//Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

//Dichiarazione della variabile che accoglie il cognome inserito dall'utente
var inputLastName = prompt("Inserisci il tuo cognome") ;

//Dichiarazione della variabile che trasforma il cognome scritto dall'utente in una parola con la prima lettera maiuscola
var lastNameCap = inputLastName.charAt(0).toUpperCase() + inputLastName.slice(1)

//Creazione dell'array e disposizione dei cognomi in ordine alfabetico attraverso .sort()
var listLastName = [
  "Bianchi",
  "Rossi",
  "Duzioni",
  "Balsano",
  "Verdi",
  lastNameCap
];

listLastName.sort();

// Creazione del ciclo for per la creazione della Lista
for (var i = 0; i < listLastName.length; i++) {
  listElement = listLastName[i];

  var orderElement = listLastName.indexOf(lastNameCap);
  document.getElementById('position-number').innerHTML = orderElement + 1;

  var listItem = document.getElementById('lista-cognomi').innerHTML;
  document.getElementById('lista-cognomi').innerHTML = listItem + "<li>" + listElement + "</li>"



}
