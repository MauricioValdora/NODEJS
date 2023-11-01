// const fs = require('fs')

// fs.writeFileSync('./archivo.xlsx')
// let contenido = fs.readFileSync('./archivo.xlsx','utf-8')
// console.log(contenido)

                                    // Esta es la forma asincrona
// fs.writeFile('./ejemplo.txt',Date(),(error,resultado)=>{
//     console.log(resultado)
//     console.log(error)
// })
// let contenidoCalback = fs.readFile('./ejemplo.txt','utf-8',(error,resultado)=>{
//     console.log(resultado)
//     console.log(error)
// })
                                    // Leer archivo con promesas

// const archivo = async()=>{


//     // const archivoLeido = JSON.parse(await fs.promises.readFile('./archivo.xlsx'))
//     const archivoString = fs.promises.readFile('./archivo.xlsx')
//     // const stats = fs.statSync('package.json')
//     // const size =stats.size
    
//     // const info={
//     //     archivoLeido,
//     //     archivoString,
//     //     // size
//     // }
//     console.log(archivoString)
// }
// archivo()

const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('archivo.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

const data = XLSX.utils.sheet_to_json(sheet);

// Generar consultas SQL INSERT
const tableName = 'nombre_tabla'; // Reemplaza con el nombre de la tabla donde deseas insertar los datos

const insertQueries = data.map((row) => {
  const columns = Object.keys(row).join(', ');
  const values = Object.values(row).map((value) => {
    if (typeof value === 'string') {
      return `'${value}'`;
    } else {
      return value;
    }
  }).join(', ');

  return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
});

// Guardar consultas en un archivo SQL
const sqlQueries = insertQueries.join('\n');
fs.writeFile('insert_queries.sql', sqlQueries, 'utf-8', (err) => {
  if (err) {
    console.error('Error al escribir el archivo SQL:', err);
  } else {
    console.log('Archivo insert_queries.sql generado exitosamente.');
  }
});


