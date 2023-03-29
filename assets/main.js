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