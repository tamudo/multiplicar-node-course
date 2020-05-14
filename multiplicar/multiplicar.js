//requireds
// -  de node y solo hay que definirlo:
//      const fs = require('fs');
// - otra no nativo express
//      const fs = require('express');
// - otro de nuestro proyecto
//      const fs = require('./fs');
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    let data = ``;

    console.log('=============================='.green);
    console.log(`=======  Tabla del ${base}  ========`.green);
    console.log('=============================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} =  ${base * i} `);
    }
    console.log('=============================='.green);
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = ``;

        if (!Number(base)) {
            reject(`No es numero ${base}`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err)
            else resolve(`tabla-${base}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}