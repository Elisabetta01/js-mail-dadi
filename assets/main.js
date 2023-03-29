// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

function controlloEmail(){
     let email = document.getElementById('email').value

     let array = ['email@gmail.com', 'email@yahoo.it', 'email@libero.it', 'email@alice.it']

     let soldatino = false;

     for(let i = 0; i < array.length; i++){
          if( array[i] == email ){
               soldatino = true
          }
     }

     if( soldatino == true){
          document.writeln("Puoi accedere")
     }else{
          document.writeln("NON puoi accedere")

     }
}

//Gioco dei dadi: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

function numero(max, min){
    return Math.floor( Math.random()* max) + min
}

function gioca(){
     let computer = numero(6, 1)
     let giocatore = numero(6, 1)

     if(giocatore > computer){
          document.writeln('il giocatore ha vinto')
     }else if(computer > giocatore){
          document.writeln('il computer ha vinto')
     }else {
          document.writeln('pareggio')
     }
}