let gratificacion = prompt("Ingrese la cantidad de dinero que recibira en Diciembre.");
let paquete = "";
switch (true) {
    case gratificacion < 10000 && gratificacion > 0:
        paquete = "D";
        break;
    case gratificacion < 20000 && gratificacion >= 10000:
        paquete = "C";
        break;
    case gratificacion < 50000 && gratificacion >= 20000:
        paquete = "B";
        break;
    case gratificacion >= 50000:
        paquete = "A";
        break;
    default:
        break;
}
console.log(`Ud podra acceder al paquete ${paquete}`);