class Persona {
 
    static contadorGlobal=0;

    constructor(nombre){
        Persona.contadorGlobal++,
        this.nombre = nombre
        console.log('se creo un nuevo miembro ya somos ' + Persona.contadorGlobal+ ' y sus nombres son '+ this.nombre)

    }

    static obtenerContadorGlobal(){
        return Persona.contadorGlobal
        
    }
}

// const persona1 = new Persona('pepe')
// const persona2 = new Persona('LOLO')
// const persona3 = new Persona('TOTO')
// const persona4 = new Persona('TITO')
// const persona5 = new Persona('POLOLO')

// const esPalindromo=(palabra='')=>{
//     const palabraInvertida = palabra.split('').reverse().join('')

//     return palabraInvertida==palabra?true:false

// }

// console.log(esPalindromo('perro'))
// console.log(esPalindromo('neuquen'))

function esPolindromo(palabra=''){
    let palabras=[]
    for(let i = 0;i<palabra.length;i++){
        palabras.push(palabra[i])
    }
    let palabraInvertida=[]
    for(let i = palabras.length-1;i>=0;i--){
        palabraInvertida.push(palabras[i])
    }
    let palabraFinal='';
    for(let i = 0;i<palabraInvertida.length;i++){
        palabraFinal+=palabraInvertida[i]
    }
    // console.log(palabraFinal)
   return (palabraFinal==palabra)
}

console.log(esPolindromo('rana'))
console.log(esPolindromo('omo'))
// console.log(persona1)
// console.log(persona2)
// console.log(Persona.obtenerContadorGlobal())
// console.log(Persona.contadorGlobal)