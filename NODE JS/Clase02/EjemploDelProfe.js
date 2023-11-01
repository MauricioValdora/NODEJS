class TicketManager{
    #eventos;
    #precioBaseGanancia;

    constructor(precioBaseGanancia=0){
        this.#eventos=[]
        this.#precioBaseGanancia=precioBaseGanancia
    }

    getEventos(){
        return this.#eventos
    }

    agregarEvento(nombre,lugar,precio,capacidad=50,fecha=new Date()){
        const evento ={
            id:this.#eventos.length+1,
            nombre,
            lugar,
            precio :precio+precio*0.15,
            capacidad,
            fecha,
            participantes:[]
        };
        
        this.#eventos.push(evento)
        return evento;
    }

    agregarUsuario(idEvento,idUsuario){
        const evento = this.#eventos.find(e=>e.id===idEvento);
        if(!evento){
            console.log(
                "el evento no existe"
            )
            return
        }
        if(evento.participantes.includes(idUsuario)){
            console.log("El usuario ya se encuantra en este evento")
            return
        }
        evento.participantes.push(idUsuario)
        console.log(`usuario con id ${idUsuario} agregado al evento ${idEvento}`)
    }

    ponerEventoEnGira(idEvento,nuevaLocalidad,nuevaFecha){
        const eventoExistente = this.#eventos.find(e=>e.id===idEvento)
        if(!eventoExistente){
            console.log("no existe el evento")
        }
        const eventoEnGira={
            ...eventoExistente,
            id:this.#eventos.length+1,
            lugar:nuevaLocalidad,
            fecha:nuevaFecha,
            participantes:[]
        }
        this.#eventos.push(eventoEnGira)
        console.log("evento agregado")
    }

}


const ticketManager = new TicketManager(50)

const evento1 = ticketManager.agregarEvento("concierto","estadio",100,1000);
const evento2 = ticketManager.agregarEvento("concierto","estadio",100,1000);

console.log(ticketManager.getEventos())

ticketManager.agregarUsuario(evento1.id,123)
ticketManager.agregarUsuario(evento2.id,123)

ticketManager.ponerEventoEnGira(evento1.id,'teatro',new Date('2023/08/08'))

