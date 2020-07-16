let AniosTrabajo= +prompt("Ingrese la cantidad de años trabajados.");
let Sueldo= +prompt("Ingrese su sueldo.");
let bonoAntiguedad = 0;
let bonoSueldo = 0;

if (AniosTrabajo>2 && AniosTrabajo<5) {
    bonoAntiguedad=Sueldo*1.2;
}else if (AniosTrabajo>=5) {
    bonoAntiguedad=Sueldo*1.3;
}else  {
    bonoAntiguedad=0;
}
if (Sueldo<=1000) {
    bonoSueldo=Sueldo*1.25;
}else if (Sueldo<=3500) {
    bonoSueldo=Sueldo*1.15;
}else  {
    bonoSueldo=Sueldo*1.1;
}

console.log(`Su bono por antiguedad seria de S/.${bonoAntiguedad}, y por sueldo seria de S/.${bonoSueldo}`);