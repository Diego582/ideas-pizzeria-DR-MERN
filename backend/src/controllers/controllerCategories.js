import Category from "../models/category.js";



export const getAllCategories = (req, res) => {

    Category.find((err, categories) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }
        res.status(200);
        return res.send(categories);
    });
};


export const sendCategory = (req, res) => {
    const category = req.body;

    if (!category.nombre) {
        res.status(400);
        return res.send({ status: "error", error: "Falta nombre de category" });
    }
    if (!category.description) {
        res.status(400);
        return res.send({ status: "error", error: "Falta description de category" });
    }


    const newCategory = new Category({
        nombre: category.nombre,
        description: category.description,

    });
    newCategory.save((err) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }
        res.status(200);
        return res.send(newCategory);
    });




}
export const getCategory = (req, res) => {
    const { id } = req.params;

    Category.findById(id, (err, category) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }

        if (!category) {
            res.status(404);
            return res.send({ status: "error", error: "No hay Categoria" });
        }

        res.status(200);
        return res.send(category);
    });

}
export const updateCategory = (req, res) => {
    const { id } = req.params;
    let { nombre, description } = req.body;

    Category.findByIdAndUpdate(id, {
        nombre, description
    }, { new: true }, (err, category) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }
        if (!category) {
            res.status(404);
            return res.send({
                status: 'error',
                error: "La category no existe"
            });
        }
        res.status(200);
        return res.send(category);
    });

}




export const deleteCategory = (req, res) => {
    const { id } = req.params;

    if (id) {
        Category.findByIdAndDelete(id, (err, category) => {
            if (err) {
                res.status(500);
                return res.send(err);
            }
            if (!category) {
                res.status(404);
                return res.send({ status: "error", error: "la categoria no existe" });
            }
            Category.find((err, category) => {
                if (err) {
                    res.status(500);
                    return res.send(err);
                }

                if (!category) {
                    res.status(404);
                    return res.send({ status: "error", error: "No hay category" });
                }

                res.status(200);
                return res.send(category);
            });
        });
    } else {
        res.status(400);
        return res.send({
            status: "error",
            error: "Falta el id del product",
        });
    }
}