let poliza=0;
let acumulado=0;
let tipoPoliza=prompt("Ingrese el tipo de Poliza a Contratar ('A'  o  'B')");
let alcohol = +prompt("Consume alcohol? (1: SI, 2:NO)");
let lentes = +prompt("Utlizza lentesl? (1: SI, 2:NO)");
let diabetes = +prompt("Sufre de Diabetes o deficiencia cardiaca? (1: SI, 2:NO)");
let edad = +prompt("Es Ud. mayor a 40 años? (1: SI, 2:NO)");

if (tipoPoliza="A") {
    poliza=1200;
}else{
    poliza=950;
}
if (alcohol=1) {
    acumulado+=poliza*0.1;
}
if (lentes=1) {
    acumulado+=poliza*0.05;
}
if (diabetes=1) {
    acumulado+=poliza*0.05;
}
if (edad=1) {
    acumulado+=poliza*0.2;
} else {
    acumulado+=poliza*0.1;
}
console.log(`Ud debe pagar de poliza la cantidad de $${poliza + acumulado}`);