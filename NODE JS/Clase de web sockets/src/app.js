import express from 'express'
import productsRouter from './routes/products.router.js'
import cartsRoutes from './routes/carts.router.js'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewRouter from './routes/views.router.js'
import { Server } from 'socket.io'

const app = express()

const httpServer = app.listen(8080, () => {
    console.log('servidor corriendo en el puerto 8080')
})
const socketServer = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + "/public"))

app.use('/', viewRouter)

// Ruta para renderizar la página principal
app.get('/', (req, res) => {
  res.render('index'); // Asegúrate de que tengas un archivo "index.handlebars" en tu carpeta de vistas
});

// Inicializa WebSockets
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Escucha eventos desde el cliente
  socket.on('mensaje', (data) => {
    console.log(`Mensaje recibido: ${data}`);

    // Aquí puedes emitir el mensaje a todos los clientes conectados o a un cliente específico
    io.emit('mensaje', data);
  });

  // Cierra la conexión del cliente
  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
