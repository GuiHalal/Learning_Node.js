import autores from "../models/Autor.js";

class AutorController{

    static listarAutores = (req, res) =>{
        autores.find((err, autores)=>{
            res.status(200).json(autores)
    })

    }

    static listarAutorPorID = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err){
                err.status(400).send({message: `${err.message} - Id do Autor não localizado`})
            }
            else {
                res.status(200).send(autores);
              }
        })
    }

    static cadastrarAutor = (req, res) => {
       let autor = new autores(req.body);

       autor.save((err)=>{
        if(err){
            res.status(500).send({message: `${err.message} - falha ao cadastrar o Autor`})
       } else{
         res.status(201).send(autor.toJSON())
       }
       })
    }

    static atualizaAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({menssagem: 'Autor atualizado com sucesso'})
            } else{
                res.status(500).send({message: err.menssage})
            }
        })
    }

    static excluirAutor = (req, res) =>{
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({menssage: 'Autor removido com sucesso'})
            }else{
                res.status(500).send({menssage: err.menssage})
            }
        })
    }

}

export default AutorController;