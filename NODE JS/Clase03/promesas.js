const dividir =(dividendo,divisor)=>{

    return new Promise((resolve,reject)=>{
        if(divisor===0){
            reject("no se puede")
        }else{
            resolve(dividendo/divisor)
        }
    })

}

dividir(3,0).then(resultado=>console.log(resultado)).catch(error=>console.log(error))