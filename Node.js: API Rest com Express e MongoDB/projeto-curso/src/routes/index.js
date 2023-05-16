import express from "express";
import autores from "./autoresRoutes.js";
import livros from "./livrosRoutes.js"

const router = (app) =>{
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default router;