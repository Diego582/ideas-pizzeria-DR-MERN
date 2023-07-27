import mongoose from "mongoose";

const DB_URI = "mongodb://" + process.env.MONGO_USERNAME + ":" + process.env.MONGO_PASSWORD + "@mongo:27017/?authMechanism=DEFAULT"

export function connectDB() {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URI).then((res, err) => {
            if (err) return reject(err);
            console.log("Conectado a la base de datos con éxito");
            resolve();
        });
    });
}

export function closeDB() {
    return mongoose.disconnect();
}