class MiClase {

    constructor(name) {

        this.name = name;

        MiClase.instances.push(this);

    }

    static getInstances() {

        return MiClase.instances;

    }

}

MiClase.instances = [];

 const instancia1 = new MiClase("Matias");

 const instancia2 = new MiClase("Pepe"); 

 const todasLasInstancias = MiClase.getInstances();

 console.log(todasLasInstancias);