const { writeFileSync, readFileSync } = require("graceful-fs");
const fs = require("fs");

// Escribir datos iniciales en marcos.json
const datosIniciales = {
    nombre: "marcos",
    estado: true
};

writeFileSync("./marcos.json", JSON.stringify(datosIniciales, null, 2));

// Leer y analizar los datos JSON
const leerJson = readFileSync("./marcos.json");
const archivoAnalizado = JSON.parse(leerJson);
console.log("Datos Iniciales:", archivoAnalizado);

// Crear un array de productos
const productos = [
    { nombre: "pechuga de pollo", precio: 1500 },
    { nombre: "pechuga de pollo", precio: 1500 },
    { nombre: "pechuga de pollo", precio: 1500 },
    { nombre: "pechuga de pollo", precio: 1500 }
];

// Escribir productos en marcos.json, sobrescribiendo datos anteriores
writeFileSync("./marcos.json", JSON.stringify({ productos }, null, 2));

// Leer y analizar los datos JSON actualizados
const jsonActualizado = readFileSync("./marcos.json");
const datosActualizados = JSON.parse(jsonActualizado);
console.log("Datos Actualizados:", datosActualizados);