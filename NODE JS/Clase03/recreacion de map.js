const arreglo = [1,2,3,4,5,6,7,8,9]

function miFuncionMap(arreglo=[],calback){

    
    let acumulador=[]
    for(let i = 0;i<arreglo.length;i++){

        const elemento= calback (arreglo[i])
        acumulador.push(elemento)
    }
    return acumulador

}

const nuevosValores = miFuncionMap(arreglo,x=>x*2)
console.log(nuevosValores)