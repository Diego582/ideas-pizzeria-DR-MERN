import { Router } from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const router = Router();

router.post("/", (req, res) => {
  const data = req.body;


  if (!data.username) {
    res.status(400);
    return res.send({ status: "error", error: "Falta nombre de Usuario" });
  }

  if (!data.nombre) {
    res.status(400);
    return res.send({ status: "error", error: "Falta nombre " });
  }
  if (!data.apellido) {
    res.status(400);
    return res.send({ status: "error", error: "Falta nombre de Apellido" });
  }
  if (!data.fechaNacimiento) {
    res.status(400);
    return res.send({ status: "error", error: "Falta nombre de fecha de Nacimiento" });
  }
  if (!data.password) {
    res.status(400);
    return res.send({
      status: "error",
      error: "debe especificar una Contraseña",
    });
  }

  bcrypt.hash(data.password, 10).then((hashedPassword) => {
    const newUser = new User({
      username: data.username,
      password: hashedPassword,
      nombre: data.nombre,
      apellido: data.apellido,
      fechaNacimiento: data.fechaNacimiento
    });
    newUser.save((err) => {
      if (err) {
        res.status(500);
        return res.send(err);
      }
      res.status(200);
      return res.send(newUser);
    });
  });
});

export default router;