# Proyecto 4 JavaScript: Aplicación de consola

## 📝 Descripción
Aplicación de consola interactiva que permite realizar operaciones matemáticas y trabajar con arreglos y objetos, usando un menú de opciones que se repite hasta que el usuario decide salir.

## 📁 Estructura del proyecto
```
proyecto-4/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## 🚀 Cómo ejecutarla
1. Abrir `index.html` en el navegador.
2. Abrir la consola (**F12** → pestaña *Consola*).
3. Pulsar **Iniciar aplicación** y elegir opciones del menú con las ventanas emergentes (`prompt`).

## 📋 Opciones del menú
| Opción | Función | Qué hace |
|---|---|---|
| 1 | `opcionOperaciones()` | Pide dos números y muestra suma, resta, multiplicación y división |
| 2 | `opcionAgregarNumero()` | Agrega un número al arreglo con `push` |
| 3 | `opcionRecorrerArreglo()` | Recorre el arreglo con `for...in` y con `while` |
| 4 | `opcionFiltrar()` | Filtra los mayores que un valor con `filter` |
| 5 | `opcionCiudades()` | Muestra el objeto de ciudades con `forEach` y `map` |
| 0 | — | Sale de la aplicación |

## 🛠️ Conceptos aplicados
* **`while` + `switch`:** el menú se repite hasta elegir salir; el `switch` llama a la función de cada opción.
* **Validaciones:** `leerNumero()` repite la pregunta con un `while` hasta recibir un número válido (no acepta texto ni vacío). Si se pulsa *Cancelar* se vuelve al menú sin errores ni `NaN`. La división por cero se controla.
* **Funciones:** una por operación, una por opción del menú, y funciones que llaman a otras (`mostrarOperacion` → `evaluarResultado`).
* **Condicionales:** `if / else if / else` para clasificar resultados.
* **Arreglos:** `for...in`, `while`, `push` y `filter`.
* **Objetos:** objeto `datos` con un arreglo de ciudades y métodos (`mostrarCiudades`, `obtenerNombres`) que usan `forEach` y `map`.

## 🧠 Aprendizaje obtenido
(Reescribe aquí con tus propias palabras qué aprendiste al corregir el proyecto.)
