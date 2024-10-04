function viajar(destino){
    if(destino==="Brazil"){
        console.log("Gire a la derecha");
    }else if(destino==="Argentina"){
        console.log("Gire a la izquierda");
    }else{
        console.log("Nos perdimos");
    }
}
viajar("Brazil");

function puedeManejar(edad){
    if (edad>=18){
        console.log("Puede manejar");
    }else {
        console.log("No puede manejar");
    }
}
puedeManejar(18);

function esNumeroEntero(numero) {
    // La función recibe un argumento llamado numero.
    // Verifica si este es un número entero o no.
    // Retorna true si lo es, de lo contrario, retorna false.
    // Por ejemplo: 
    // 24 ---> true 
    // -1212 ---> true 
    // 121.212 ---> false 
    // Tu código:
    if(numero%2==0){
        console.log("True");
    }else{
      console.log("False");
    }
  }
  esNumeroEntero(8);