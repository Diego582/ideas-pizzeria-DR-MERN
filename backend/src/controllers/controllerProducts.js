import Product from "../models/product.js";



export const getAllProducts = (req, res) => {

    Product.find((err, products) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }
        res.status(200);
        return res.send(products);
    });
};


export const sendProducts = (req, res) => {
    const products = req.body;

    if (!products.nombre) {
        res.status(400);
        return res.send({ status: "error", error: "Falta nombre de products" });
    }
    if (!products.description) {
        res.status(400);
        return res.send({ status: "error", error: "Falta description de products" });
    }
    if (!products.precio) {
        res.status(400);
        return res.send({ status: "error", error: "Falta precio de products" });
    }
    if (!products.quantity) {
        res.status(400);
        return res.send({ status: "error", error: "Falta quantity de products" });
    }
    if (!products.category) {
        res.status(400);
        return res.send({ status: "error", error: "Falta category de products" });
    }
    if (!products.image) {
        res.status(400);
        return res.send({ status: "error", error: "Falta image de products" });
    }


    const newProduct = new Product({
        nombre: products.nombre,
        description: products.description,
        precio: products.precio,
        quantity: products.quantity,
        category: products.category,
        image: products.image,
    });
    newProduct.save((err) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }
        res.status(200);
        return res.send(newProduct);
    });




}
export const getProduct = (req, res) => {
    const { id } = req.params;

    Product.findById(id, (err, product) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }

        if (!product) {
            res.status(404);
            return res.send({ status: "error", error: "No hay Producto" });
        }

        res.status(200);
        return res.send(product);
    });

}
export const updateProduct = (req, res) => {
    const { id } = req.params;
    let { nombre, description, precio, quantity, category, image } = req.body;

    Product.findByIdAndUpdate(id, {
        nombre, description, precio, quantity, category, image,
    }, { new: true }, (err, product) => {
        if (err) {
            res.status(500);
            return res.send(err);
        }
        if (!product) {
            res.status(404);
            return res.send({
                status: 'error',
                error: "El product no existe"
            });
        }
        res.status(200);
        return res.send(product);
    });

}




export const deleteProduct = (req, res) => {
    const { id } = req.params;

    if (id) {
        Product.findByIdAndDelete(id, (err, product) => {
            if (err) {
                res.status(500);
                return res.send(err);
            }
            if (!product) {
                res.status(404);
                return res.send({ status: "error", error: "el Product no existe" });
            }
            Product.find((err, product) => {
                if (err) {
                    res.status(500);
                    return res.send(err);
                }

                if (!product) {
                    res.status(404);
                    return res.send({ status: "error", error: "No hay product" });
                }

                res.status(200);
                return res.send(product);
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

