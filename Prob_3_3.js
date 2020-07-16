let ahorro= +prompt("Ingrese la cantidad que dispone en S/.");
let regalo = "";

if (ahorro<=10) {
    regalo="Tarjeta";
}else if (ahorro<=100) {
    regalo="Chocolates";
}else if (ahorro<=250) {
    regalo="Flores";
}else  {
    regalo="Anillo";
}
console.log(`Usted puede regalarle : ${regalo}`);