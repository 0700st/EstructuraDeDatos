//Ejemplo 1 Funcion con parametros
function sumaTres(x){
    console.log(x+3);
}
sumaTres(5);

function sumaXY(x,y){
    console.log(x**2+3*y);
}
sumaXY(4,3);
//Funcion sin parametros
function saludar(){
    console.log("Hola ¿como estas? usaste la función saludar.");
}
saludar();
//Ejemplo 2: Encapsular los ejercicios anteriores
function operacionesComparacion(){
    
}
function suma(a, b) {
    return a + b;
}

var sumaDos = (x, y) => {
    return x + y;
  }

var rsuma = suma(10,9);
console.log(rsuma);

var rsuma2 = sumaDos(50,60);
console.log(rsuma2);

//Ejercicios anteriores encapsulados en funciones 
function operacionesComparacion(){
    console.log("4 es mayor que 7: ", 4 > 7);
    console.log("4 es menor que 7: ", 4 < 7);
    console.log("4 es mayor o igual que 7: ", 4 >= 7);
    console.log("4 es nemor o igual que 7: ", 4 <= 7);
    console.log("4 es igual que 7: ", 4 == 7);
    console.log("4 es diferente a 7: ", 4 != 7);
}

operacionesComparacion();

function igualdadExtricta(){
    console.log("Igualdad extricta");
    console.log(3 == 3);
    console.log(3 === 3);
    console.log(3 == "3");
    console.log(3 === "3");
    console.log("BOB ESPONJA");
    console.log(0 == "0");
    console.log(0 == []);
    console.log("0" == []);
    console.log(true == 1);
    console.log("Estrella",false === 0);
}

igualdadExtricta();