import { Router } from "express";

import {
    getAllProducts,
    sendProducts,
    getProduct,
    updateProduct,
    deleteProduct
} from "../controllers/controllerProducts.js"

const router = Router();


router.get('/', getAllProducts)

router.get('/:id', getProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

router.post('/', sendProducts)

export default router