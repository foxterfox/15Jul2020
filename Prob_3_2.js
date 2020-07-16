let pagohora = +prompt("Introduzca el pago por hora");
let horassemana = +prompt("Introduzca la cantidad de horas trabajadas en la semana");
let sueldosemana=0;

if (horassemana<=40) {
    sueldosemana=pagohora*horassemana;
    console.log(`El sueldo a cobrar por la semana es de S/. ${sueldosemana}`);
}else{
    sueldosemana=40*pagohora + 2*pagohora*(horassemana-40);
    console.log(`El sueldo a cobrar por la semana es de S/. ${sueldosemana}`);
}