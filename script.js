// Entrada de datos
let numero1 = parseFloat(prompt("Ingrese primer numero"));
let numero2 = parseFloat(prompt("Ingrese segundo numero"));

// Operaciones matemáticas
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicación = numero1 * numero2;
const división = numero1 / numero2;

// Salida de datos
console.log("Primer número: " + numero1);
console.log("Segundo número: " + numero2);
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicación);
console.log("División: " + división);

// Ejemplo de if
if (suma > 10) {
    console.log("La suma es mayor que 10");
}

// Ejemplo de if/else
if (multiplicación > 20) {
    console.log("La multiplicación es mayor que 20");
} else {
    console.log("La multiplicación no es mayor que 20");
}

// Ejemplo de switch
switch (división) {
    case 0: {
        console.log("La división es igual a 0");
        break;
    }
    case 2: {
        console.log("La división es igual a 2");
        break;
    }
    case 4: {
        console.log("La división es igual a 4");
        break;
    }
    default: {
        console.log("La división no es igual a 0, 2 o 4");
        break;
    }
}

// Ejemplo de arreglos y ciclos
const numeros = [10, 20, 30, 40, 50];

// Ejemplo usando for...in
console.log("\n=== for...in ===");
for (const i in numeros) {
    console.log(`Posición ${i}: ${numeros[i]}`);
}

// Ejemplo usando while
console.log("\n=== while ===");
let i = 0; 

while (i < numeros.length) {
    console.log(`Posición ${i}: ${numeros[i]}`);
    i++; // se agrega 1 al índice para avanzar al siguiente elemento y evitar un bucle infinito
}

// Ejemplo de funciones Javascript
// Funcion para cada operacion matematicas

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) return 0; 
    return a / b;
}

// Se define dos números para la funciones matemáticas 
const num1 = 10;
const num2 = 5;

// Salida de datos
console.log("=== RESULTADOS FUNCIONES ===");
console.log("La suma es: " + sumar(num1, num2)); // 15
console.log("La resta es: " + restar(num1, num2)); // 5
console.log("La multiplicación es: " + multiplicar(num1, num2)); // 50
console.log("La división es: " + dividir(num1, num2)); // 2

// Ejemplo de Función filtrando datos
function filtrarMayoresQueCinco(arreglo) {
    let filtrados = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 5) {
            filtrados.push(arreglo[i]);
        }
    }
    return filtrados; 
}


// Defino los mismo valores para el ejercicio anterior
const num3 = 10;
const num4 = 5;

// Se ejecutan las operaciones básicas para obtener datos
const Suma = sumar(num3, num4);          // 15
const Resta = restar(num3, num4);        // 5
const Multiplicacion = multiplicar(num3, num4);    // 50
const Division = dividir(num3, num4);          // 2

// Se crea un arreglo para los resultados del filtro
const todosLosResultados = [Suma, Resta, Multiplicacion, Division];

// Salida de datos para el filtro
console.log("=== DATOS PARA EL FILTRO ===");
console.log(`Primer número introducido: ${num3}`);
console.log(`Segundo número introducido: ${num4}`);
console.log(`Suma (10 + 5): ${Suma}`);
console.log(`Resta (10 - 5): ${Resta}`);
console.log(`Multiplicación (10 * 5): ${Multiplicacion}`);
console.log(`División (10 / 5): ${división}`);


// Definimos el filtro
const filtradosMayoresA5 = filtrarMayoresQueCinco(todosLosResultados);
// Salida de datos del filtro 
console.log("=== DATOS FILTRADOS (SOLO MAYORES QUE 5) ===");
console.log("Resultados que cumplen la condición:", filtradosMayoresA5);


//Ejemplo de Objetos en Javascript

// Objeto paises y ciudades
let datos = {
  ciudades: [
    { pais: "Chile", ciudad: "Santiago", poblacion: 6250000, tamano: "Grande" }, 
    { pais: "Argentina", ciudad: "Buenos Aires", poblacion: 3120000, tamano: "Grande" }, 
    { pais: "Perú", ciudad: "Lima", poblacion: 10200000, tamano: "Grande" }, 
    { pais: "Uruguay", ciudad: "Montevideo", poblacion: 1380000, tamano: "Mediana" },
    { pais: "Bolivia", ciudad: "La Paz", poblacion: 820000, tamano: "Pequeña" } 
  ]
};
console.log("=== DATOS OBJETOS ===");
// Recorrer los datos con forEach
datos.ciudades.forEach((item, index) => {
  console.log(`Registro ${index + 1}:`);
  console.log(`País: ${item.pais}`);
  console.log(`Ciudad: ${item.ciudad}`);
  console.log(`Población: ${item.poblacion}`);
  console.log(`Tamaño: ${item.tamano}`);
 console.log("-----------------------");
});