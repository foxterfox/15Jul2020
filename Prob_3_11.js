let AniosTrabajo = +prompt("Ingrese la cantidad de años trabajados.");
let bonoAntiguedad = 0;

switch (AniosTrabajo) {
    case 1:
        bonoAntiguedad=100;
        break;
    case 2:
        bonoAntiguedad=200;
        break;
    case 3:
        bonoAntiguedad=300;
        break;
    case 4:
        bonoAntiguedad=400;
        break;
    case 5:
        bonoAntiguedad=500;
        break;

    default:
        bonoAntiguedad=1000;
        break;
}
console.log(`Su bono por antiguedad seria de S/.${bonoAntiguedad}`);