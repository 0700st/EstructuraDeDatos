//Comparaciones (=) son de derecha a izquierda.
//Las operaciones (+, -, /) son de izquierda a derecha.
console.log ("4 es mayor que 7: ",4 < 7); 
console.log ("4 es menor que 1: ",4 < 1 );
console.log ("4 es mayor que 4: ",4 > 4); 
console.log ("4 es igual que 7: ",4 == 7);
console.log ("4 es diferente que 7: ",4 != 7);
//Igualdades
console.log ("3 es igual que Tres: ",3 === "3");
console.log ("3 es igual que 3: ",3 == "3");

//Asociatividad
var a=50;
var b=2;
var c=(a=b);
console.log("a es igual que: ",a);
console.log("b es igual que: ",b);
console.log("c es igual que: ",c);


//SUMA
var d=1;
var e=2;
var f=d+=e;
//Suma d(1) mas e(2) y da el resultado de f que es 3
console.log("d es igual que: ",d);
console.log("e es igual que: ",e);
console.log("f es igual que: ",f);

//RESTA
var g=1;
var h=2;
var i=g-=h;
//Resta g(1) menos h(2) y da el resultado de i que es -1
console.log("g es igual que: ",g);
console.log("h es igual que: ",h);
console.log("i es igual que: ",i);

//EXPONENTE
var j=2;
var k=2;
var m=j**=k;
//Eleva j(2) a k(2)=2^2 y da el resultado de m que es 4
console.log("j es igual que: ",j);
console.log("k es igual que: ",k);
console.log("m es igual que: ",m);
