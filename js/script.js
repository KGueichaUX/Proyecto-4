// =====================================================
// Proyecto 4 - Aplicación de consola en JavaScript
// Menú interactivo con while, funciones, arreglos y objetos
// =====================================================

// ---------- DATOS ----------

// Arreglo de números que el usuario puede ampliar desde el menú
const numeros = [10, 20, 30, 40, 50];

// Objeto con un arreglo de objetos y métodos propios
const datos = {
    ciudades: [
        { pais: "Chile", ciudad: "Santiago", poblacion: 6250000, tamano: "Grande" },
        { pais: "Argentina", ciudad: "Buenos Aires", poblacion: 3120000, tamano: "Grande" },
        { pais: "Perú", ciudad: "Lima", poblacion: 10200000, tamano: "Grande" },
        { pais: "Uruguay", ciudad: "Montevideo", poblacion: 1380000, tamano: "Mediana" },
        { pais: "Bolivia", ciudad: "La Paz", poblacion: 820000, tamano: "Pequeña" }
    ],

    // Método: muestra todos los registros recorriendo con forEach
    mostrarCiudades() {
        this.ciudades.forEach((item, index) => {
            console.log(`Registro ${index + 1}:`);
            console.log(`  País: ${item.pais}`);
            console.log(`  Ciudad: ${item.ciudad}`);
            console.log(`  Población: ${item.poblacion.toLocaleString("es-CL")}`);
            console.log(`  Tamaño: ${item.tamano}`);
            console.log("-----------------------");
        });
    },

    // Método: devuelve solo los nombres de las ciudades usando map
    obtenerNombres() {
        return this.ciudades.map(item => item.ciudad);
    }
};

// ---------- VALIDACIONES ----------

// Pide un número hasta que sea válido. Devuelve null si el usuario cancela.
function leerNumero(mensaje) {
    let valor = null;
    let valido = false;

    while (!valido) {
        const entrada = prompt(mensaje);

        if (entrada === null) {
            return null; // el usuario pulsó Cancelar
        }

        const texto = entrada.trim().replace(",", ".");
        const convertido = Number(texto);

        if (texto !== "" && Number.isFinite(convertido)) {
            valor = convertido;
            valido = true;
        } else {
            alert("Entrada no válida. Ingrese solo números (ejemplo: 12 o 3.5).");
        }
    }
    return valor;
}

// ---------- OPERACIONES MATEMÁTICAS ----------

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

// Devuelve null si se intenta dividir por cero
function dividir(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}

// Clasifica un resultado usando condicionales
function evaluarResultado(valor) {
    if (valor === null) {
        return "no se puede calcular (división por cero)";
    } else if (valor > 0) {
        return "es positivo";
    } else if (valor < 0) {
        return "es negativo";
    } else {
        return "es igual a cero";
    }
}

// Muestra una operación en consola llamando a evaluarResultado
function mostrarOperacion(nombre, resultado) {
    const texto = resultado === null ? "indefinido" : resultado;
    console.log(`${nombre}: ${texto} -> ${evaluarResultado(resultado)}`);
}

// ---------- FUNCIONES DE CADA OPCIÓN DEL MENÚ ----------

function opcionOperaciones() {
    const numero1 = leerNumero("Ingrese el primer número:");
    if (numero1 === null) {
        console.log("Operación cancelada.");
        return;
    }

    const numero2 = leerNumero("Ingrese el segundo número:");
    if (numero2 === null) {
        console.log("Operación cancelada.");
        return;
    }

    console.log("\n=== OPERACIONES MATEMÁTICAS ===");
    console.log(`Primer número: ${numero1} | Segundo número: ${numero2}`);
    mostrarOperacion("Suma", sumar(numero1, numero2));
    mostrarOperacion("Resta", restar(numero1, numero2));
    mostrarOperacion("Multiplicación", multiplicar(numero1, numero2));
    mostrarOperacion("División", dividir(numero1, numero2));
}

function opcionAgregarNumero() {
    const nuevo = leerNumero("Ingrese el número que desea agregar al arreglo:");
    if (nuevo === null) {
        console.log("No se agregó ningún número.");
        return;
    }
    numeros.push(nuevo);
    console.log(`\nNúmero ${nuevo} agregado. Arreglo actual: [${numeros.join(", ")}]`);
}

function opcionRecorrerArreglo() {
    console.log("\n=== RECORRIDO CON for...in ===");
    for (const indice in numeros) {
        console.log(`Posición ${indice}: ${numeros[indice]}`);
    }

    console.log("\n=== RECORRIDO CON while ===");
    let contador = 0;
    while (contador < numeros.length) {
        console.log(`Posición ${contador}: ${numeros[contador]}`);
        contador++; // avanza al siguiente elemento y evita un bucle infinito
    }
}

function filtrarMayoresQue(arreglo, limite) {
    return arreglo.filter(numero => numero > limite);
}

function opcionFiltrar() {
    const limite = leerNumero("Mostrar los números mayores que:");
    if (limite === null) {
        console.log("Filtro cancelado.");
        return;
    }

    const filtrados = filtrarMayoresQue(numeros, limite);
    console.log("\n=== FILTRO CON filter ===");
    console.log(`Arreglo original: [${numeros.join(", ")}]`);
    console.log(`Mayores que ${limite}: [${filtrados.join(", ")}]`);
}

function opcionCiudades() {
    console.log("\n=== DATOS DE CIUDADES ===");
    datos.mostrarCiudades();
    console.log("Ciudades registradas:", datos.obtenerNombres().join(", "));
}

// ---------- MENÚ PRINCIPAL ----------

const textoMenu =
    "=== MENÚ PRINCIPAL ===\n" +
    "1. Operaciones matemáticas\n" +
    "2. Agregar un número al arreglo\n" +
    "3. Recorrer el arreglo (for...in y while)\n" +
    "4. Filtrar números mayores que un valor\n" +
    "5. Ver ciudades (objetos)\n" +
    "0. Salir\n\n" +
    "Elija una opción:";

function iniciarApp() {
    let continuar = true;

    console.log("Aplicación iniciada.");

    while (continuar) {
        const entrada = prompt(textoMenu);

        if (entrada === null) {
            continuar = false; // Cancelar en el menú termina la aplicación
        } else {
            switch (entrada.trim()) {
                case "1":
                    opcionOperaciones();
                    break;
                case "2":
                    opcionAgregarNumero();
                    break;
                case "3":
                    opcionRecorrerArreglo();
                    break;
                case "4":
                    opcionFiltrar();
                    break;
                case "5":
                    opcionCiudades();
                    break;
                case "0":
                    continuar = false;
                    break;
                default:
                    alert("Opción no válida. Elija un número del 0 al 5.");
            }
        }
    }

    console.log("\nAplicación finalizada. ¡Hasta pronto!");
}

// La aplicación se inicia al pulsar el botón de la página
document.getElementById("btnIniciar").addEventListener("click", iniciarApp);
