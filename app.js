const process = require('process');
const {listar, guardarTarea, filtrarPorEstado} = require('./tareas');
const consola = process.argv[2];

switch (consola) {
    case 'listar':
        console.log('Listado de tareas:');
        listar();
        break;
    case 'crear':
        guardarTarea(process.argv[3], process.argv[4]); //titulo y estado vendra lo ingresado por consola y estado pendiente siempre
        break;
    case 'filtrar':
        filtrarPorEstado(process.argv[3]);
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log('No entiendo qué quieres hacer.');
        break;
}