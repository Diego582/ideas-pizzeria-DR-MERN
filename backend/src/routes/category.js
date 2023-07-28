import { Router } from "express";

import {
    getAllCategories,
    sendCategory,
    getCategory,
    updateCategory,
    deleteCategory
} from "../controllers/controllerCategories.js"

const router = Router();


router.get('/', getAllCategories)

router.get('/:id', getCategory)

router.put('/:id', updateCategory)

router.delete('/:id', deleteCategory)

router.post('/', sendCategory)

export default router