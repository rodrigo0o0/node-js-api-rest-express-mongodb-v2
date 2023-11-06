import livro from "../models/Livro.js"
import {autor} from "../models/Autor.js"

class LivroController {
    static async listarLivros(req, res) {
        try{
            const listaLivros = await livro.find();
            res.status(200).json(listaLivros);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao listar livror.` })  
        }

    };
    static async listarLivroPorId(req, res) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do livro.` })  
        }

    };



    static async cadastrarLivro(req, res) {
        try {
            console.log("Cadastrando o livro");
            //o Método create retorna o objeto que foi criado.
            //const novoLivro = await livro.create(req.body);
            const novoLivro = req.body;
            console.log(novoLivro);
            const autorEncontrado = await autor.findById(novoLivro.autor);
            
            console.log("Autor encontrado" + autorEncontrado);
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}};


            const livroCriado = await livro.create(livroCompleto);

            res.status(201).json({message: "Cadastrado com Sucesso", livro: livroCriado});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro.` })            
        }

    };

    static async atualizarLivroPorId(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id,req.body);
            res.status(200).json({message: "Livro Atualizado."});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao atualizar livro.` })  
        }

    };

    static async deletarLivroPorId(req,res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro excluido com sucesso."});
        } catch (error) {
            res.status(500).json({message: `${erro.message} - falha ao excluir livro.` })  
        }
    }
    static async listarLivrosPorEditora(req,res){
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({editora:editora});
            res.status(200).json(`Livro encontrado : ${livrosPorEditora}`);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - falha ao buscar livro pro editora.` })  

        }
    }

};

export default LivroController;