import autores from "../models/Autor.js";
import livros from "../models/Livro.js";

class LivroController{

    static listarLivros = (req, res) =>{
        livros.find()
        .populate('autor')
        .exec((err, livros)=>{
            res.status(200).json(livros)
    })
    }

    static listarLivroPorID = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {
            if(err){
                err.status(400).send({message: `${err.message} - Id do livro não localizado`})
            }
            else {
                res.status(200).send(livros);
              }
        })
    }

    static cadastrarLivro = (req, res) => {
       let livro = new livros(req.body);

       livro.save((err)=>{
        if(err){
            res.status(500).send({message: `${err.message} - falha ao cadastrar o livro`})
       } else{
         res.status(201).send(livro.toJSON())
       }
       })
    }

    static atualizaLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({menssagem: 'Livro atualizado com sucesso'})
            } else{
                res.status(500).send({message: err.menssage})
            }
        })
    }

    static excluirLivro = (req, res) =>{
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({menssage: 'Livro removido com sucesso'})
            }else{
                res.status(500).send({menssage: err.menssage})
            }
        })
    }

    static listarLivroPorEditora = (req, res) =>{
        const editora = req.query.editora

        livros.find({'editora': editora}, {}, (err, livros)=>{
            res.status(200).send(livros);
        })
    }

}

export default LivroController;