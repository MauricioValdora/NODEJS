import { Router as expressRouter } from 'express'

export default class Router {
    constructor() {
        this.router = expressRouter()
        this.init()
    }

    getRouter() {
        return this.router;
    }

    init() { }

    get(path, ...calbacks) {
        this.router.get(path, this.applyCallbacks(calbacks))
    }

    generateCustomResponse = () => {

    }

    applyCallbacks(callbacks) {
        return callbacks.map((callback) => async (...params) => {
            try {
                await callback.apply(this, params)
            } catch (error) {
                params[1].status(500).json({ status: 'error', message: error.message })
            }
        })
    }
}