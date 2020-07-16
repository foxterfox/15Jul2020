let horas= +prompt("Ingrese la cantidad horas utilizadas en el parqueo.");
let parqueo = 0

if (horas<=2) {
    parqueo=horas*5;
}else if (horas<=5) {
    parqueo=10 + 4*(horas - 2);
}else if (horas<=10) {
    parqueo=22 + 3*(horas - 5);
}else  {
    parqueo=37 + 2*(horas - 10);
}
console.log(`Usted debe pagar de parqueo: S/.${parqueo}`);