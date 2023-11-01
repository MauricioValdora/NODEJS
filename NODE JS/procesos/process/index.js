
process.on('exit', code => {
    console.log(code)
})
process.on('uncaughException', error => {
    console.log('ell erroor es')
    console.log(error)
})
console.log(test)
console.log('probando listeners');

