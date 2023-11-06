import {autor} from "../models/Autor.js"

class AutorController {
    static async listarAutores(req, res) {
        try{
            console.log("Buscando autores");
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao listar Autor.` })  
        }

    };
    static async listarAutorPorId(req, res) {
        try{
            const id = req.params.id;
            const AutorEncontrado = await autor.findById(id);
            res.status(200).json(AutorEncontrado);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do Autor.` })  
        }

    };



    static async cadastrarAutor(req, res) {
        try {
            //o Método create retorna o objeto que foi criado.
            const novoAutor = await autor.create(req.body);
            res.status(201).json({message: "Cadastrado com Sucesso", autor: novoAutor});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar Autor.` })            
        }

    };

    static async atualizarAutorPorId(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id,req.body);
            res.status(200).json({message: "Autor Atualizado."});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao atualizar Autor.` })  
        }

    };

    static async deletarAutorPorId(req,res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor excluido com sucesso."});
        } catch (error) {
            res.status(500).json({message: `${erro.message} - falha ao excluir Autor.` })  
        }
    }

};

export default AutorController;