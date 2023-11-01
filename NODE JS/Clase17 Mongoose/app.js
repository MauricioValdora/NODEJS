import ordersModel from './models/orders.js'
import mongoose from 'mongoose'

const enviroment = async () => {
    try {
        await mongoose.connect('mongodb+srv://mauricio:valdora@clustermaury.y8wiux9.mongodb.net/clase17Mongoose')
        console.log('base conected')
        const order = [

            {

                name: "Pepperoni", size: "small", price: 19,

                quantity: 10, date: "2021-03-13T08:14:30Z"

            },

            {

                name: "Pepperoni", size: "medium", price: 20,

                quantity: 20, date: "2021-03-13T09:13:24Z"

            },

            {

                name: "Pepperoni", size: "large", price: 21,

                quantity: 30, date: "2021-03-17T09:22:12Z"

            },

            {

                name: "Cheese", size: "small", price: 12,

                quantity: 15, date: "2021-03-13T11:21:39.736Z"

            },

            {

                name: "Cheese", size: "medium", price: 13,

                quantity: 50, date: "2022-01-12T21:23:13.331Z"

            },

            {

                name: "Cheese", size: "large", price: 14,

                quantity: 10, date: "2022-01-12T05:08:13Z"

            },

            {

                name: "Vegan", size: "small", price: 17,

                quantity: 10, date: "2021-01-13T05:08:13Z"

            },

            {

                name: "Vegan", size: "medium", price: 18,

                quantity: 10, date: "2021-01-13T05:10:13Z"

            }

        ]

        await ordersModel.insertMany(order)
        const orders = await ordersModel.aggregate([
            {
                //filtra solo las medianas
                $match: { size: 'medium' }
            },
            {
                //de las encontradas agrupa por nombre y suma la cantidad
                $group: {
                    _id: "$name",
                    totalPrice: { $sum: '$quantity' }
                }
            },
            {
                //ordena de mayor a menor y si es 1 de menor a mayor
                $sort: { totalPrice: -1 }
            },
            {
                //camos a agrupar los documentos dentro de un arreglo
                $group: { _id: 1, orders: { $push: '$$ROOT' } } // ROOT accedo a todas las propiedades del objeto 
            },
            {
                //aplicamos proyeccion, vamos a generar un nuevo documento con un nuevo ObjectID 
                $project: {
                    '_id': 0,//genera object id automatico
                    orders: '$orders'

                }
            },
            //almacenamos la orden en una coleccion llamada reports
            {
                $merge: {
                    into: 'reports'
                }
            }
        ])
        console.log("orders:", JSON.stringify(orders, null, '\t'))
    } catch (error) {
        console.log(error)
    }
}

enviroment()