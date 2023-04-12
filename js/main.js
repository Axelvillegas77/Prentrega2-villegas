

let nombreCompleto = prompt("Ingresa tu nombre ");

if (nombreCompleto == "") {
    alert("Es necesario que coloques tu nombre y apellido");
} else {
    alert("Bienvenido/a " + nombreCompleto);
    console.log("usuario registrado: " + nombreCompleto);
}


for (let i = 1; i <= 1; i++) {
    let pregunta = prompt("Estas buscando algun repuesto en particular");
    if (pregunta != "si") {
        alert("A continuacion te dejamos una lista de productos.");
    } else {
        alert("indicanos que respuesto o accesorio deseas comprar:");
        break;
    }
}

let repuestos = prompt("\n1-Aceite \n2-Cascos \n3-Escapes \n4-Guantes \n5-Cubiertas")
switch (repuestos) {
    case "1":
        alert("Seleccionaste Aceite, su precio es de: $900");
        console.log("producto ingresado: aceite");
        break;

    case "2":
        alert("Seleccionaste Cascos, su precio es de: $10.000");
        console.log("producto ingresado: cascos");
        break;

    case "3":
        alert("Seleccionaste Escapes, su precio es de $2.000");
        console.log("producto ingresado: escapes");
        break;

    case "4":
        alert("Seleccionaste Guantes, su precio es de $1.500");
        console.log("producto ingresado: guantes");
        break;

    case "5":
        alert("Seleccionaste Cubiertas, su precio es de $20.000");
        console.log("producto ingresado: cubiertas");
        break;

    default:
        alert("INGRESO NO VALIDO")
        break;
}


function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);

    this.vender = (cant) => {
        if (cant <= this.stock) {
            this.stock = this.stock - cant;
            return this.precio * cant;
        } else {
            return "Sin stock";
        }
    }
}

const repuesto = new Producto("cubierta michelin", 20000, 15);

console.log("Repuesto o accesorio: " + repuesto.nombre + " precio: $" + repuesto.precio + " stock:" + repuesto.stock);

let venta = repuesto.vender(4)
console.log("total vendido: $" + venta);
console.log("Repuesto o accesorio: " + repuesto.nombre + " precio: $" + repuesto.precio + " stock:" + repuesto.stock);


const nombres = ["aceites", "cascos", "escapes", "cubiertas", "guantes"];
console.log(nombres);

const filtrados = nombres.filter(n => n === "cascos" || n === "guantes");
console.log(filtrados);

































// let producto = prompt("nombra los respuestos o accesorios que buscas, para salir preciona 0");

// while (producto != "0") {
//     alert("ingresaste el repuesto o accesorio: " + producto);
//     producto = prompt("nombra los respuestos o accesorios que buscas, para salir preciona 0");
// }

































