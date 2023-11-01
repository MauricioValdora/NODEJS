const fs  = require('fs').promises;
const crypto = require('crypto');
const { json } = require('stream/consumers');
const salt = crypto.randomBytes('16').toString('hex')


class UserManager{
    async crearUsuario(usuario){
        try {
            let usuario = [];
            try {
                const usuarioData = await fs.readFile('usuario.json','utf-8');
                usuario = JSON.parse(usuarioData)
            } catch (error) {
                await fs.writeFile('usuario.json','[]','utf-8')
            }
            const hashedPasword = this.hashedPasword(usuario.contraseña)
            
        } catch (error) {
            
        }
    }
}