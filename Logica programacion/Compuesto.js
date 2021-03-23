//Constantes de formato 
var salto = '<br>';

//Problema a resolver:
var problema1 = ('1.Leer 2 números; si son iguales que los multiplique, si el primero es mayor que el segundo que los reste y si no que los sume.')
document.write(problema1, salto);

//Datos
var nume1 = 5;
var nume2 = 5;
var resultado;
var operacion;

if (nume1 === nume2) {
    operacion = "multiplicacion"
    resultado = nume1 * nume2;
}
if (nume1> nume2) {
    operacion = "resta"
    resultado = nume1 - nume2;
}
if (nume1< nume2) {
    operacion = "suma"
    resultado = nume2 + nume1;
}
document.write('Los números ingresados son : ', nume1 , ' y ' , nume2 ,salto, ' La operacion ejecutada es ', operacion, salto, ' El resultado obtenido ', resultado, salto, salto);

//--------------------------------------------------------------------------------------------------------
var problema2 = ('2.Leer tres números diferentes e imprimir el número mayor de los tres.')
document.write(problema2,salto);

//Datos
var nume1 = 4;
var nume2 = 3;
var nume3 = 9;
var resultado; 

if (nume1 > nume2 & nume1 > nume3) {
    resultado = 'El numero uno = '+nume1;
}
if (nume2 > nume1 & nume2 > nume3) {
    resultado = 'El numero dos ='+nume2;
}
if (nume3 > nume1 & nume3 > nume2) {
    resultado = 'El numero tres ='+nume3;
}
document.write('El numero mayor dado es: ', resultado, salto, salto);

//----------------------------------------------------------------------------------------------------------------




