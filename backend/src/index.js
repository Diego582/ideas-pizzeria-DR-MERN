import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import usersRouter from "./routes/users.js";
import productsRouter from "./routes/product.js";
import categoriesRouter from "./routes/category.js";



const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

connectDB().then(() => {
    app.listen(PORT, () =>
        console.log("app corriendo en http://localhost:" + PORT)
    );
});