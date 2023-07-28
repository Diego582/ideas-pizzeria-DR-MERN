import { Router } from "express";

import {
    getAllProductos,
    sendProductos,
    getProducto,
    updateProducto,
    deleteProducto
} from "../controllers/controllerProducto.js"

const route = Router();


route.get('/productos', getAllProductos)

route.get('/productos/:id', getProducto)

route.put('/productos/:id', updateProducto)

route.delete('/productos/:id', deleteProducto)

route.post('/productos', sendProductos)

export default route