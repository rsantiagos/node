/////////////////////CLASES/////////////////////
class Utileria {
    constructor(fs) {
        this.fs = fs;
    }

    /**
     * @param {string} archivo ruta relativa o absoluta del archivo a leer
     * @param {function} funcion que maneja el evento al termino del mismo
     */
    leer(archivo, handler) {
        this.fs.readFile(archivo, 'utf8', handler);
    }

    /**
     * @param {string} archivo ruta relativa o absoluta del archivo a escribir
     * @param {string} contenido Contenido del archivo a escribir.
     * @param {function} funcion que maneja el evento al termino del mismo
     */
    escribir(archivo, contenido, handler) {
        this.fs.writeFile(archivo, contenido, handler);
    }    
}

////////FIN CLASE///////////////



// importamos la libreria
const fs = require('fs');

// una forma mas orientada a objetos
let utils = new Utileria(fs);
let archivo = "./ejemplo.las"

utils.leer(archivo, function (err, data) {
    if (err) {
        return console.log(err);
    }else{
        let nombreArchivo="./archivoNuevo.html"
        let mensaje=data
        utils.escribir(nombreArchivo, mensaje, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("El nuevo archivo se transformo correctamente");
        })
    }
});

/*
utils.escribir(archivo, mensaje, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("Archivo escrito correctamente!")
    utils.leer(archivo, function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log("Contenido: ", data)
    });
});*/