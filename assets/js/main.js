//Istruzioni
//Chiedere all'utente il cognome
//Inserirlo in un array con altri cognomi: ‘Bianchi', ‘Rossi', ‘Duzioni', ‘Balsano', ‘Verdi'
//Stampa la lista ordinata alfabeticamente
//crivi anche la posizione "umana" della lista in cui il nuovo utente si trova

//Dichiarazione della variabile che accoglie il cognome inserito dall'utente
var inputLastName = prompt("Inserisci il tuo cognome") ;

//Dichiarazione della variabile che trasforma il cognome scritto dall'utente in una parola con la prima lettera maiuscola
var lastNameCap = inputLastName.charAt(0).toUpperCase() + inputLastName.slice(1)

//Creazione dell'array e disposizione dei cognomi in ordine alfabetico attraverso .sort()
var listLastName = [ "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi", lastNameCap ]
listLastName.sort();

console.log(listLastName);
