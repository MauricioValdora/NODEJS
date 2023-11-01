import dotenv from 'dotenv'
import {Command} from 'commander'

const program = new Command()

program.option('--mode <modo>' , 'variable de ambiente')
program.parse();


const enviroment = program.opts().mode
dotenv.config({
    path: (enviroment === 'DEVELOPMENT') ? './.env.development' : './.env.production'
});

const configs = {
    port: process.env.PORT || 3001,
    mongoUrl: process.env.MONGO_URL,
}

export default configs;