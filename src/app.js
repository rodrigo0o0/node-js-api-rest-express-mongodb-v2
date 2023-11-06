import express from 'express';
import conectaDatabase from './config/dbconnect.js';
import routes from "./routes/index.js"

const conexao = await conectaDatabase();

conexao.on("error", (erro) =>{
    console.error("erro de conexão " + erro);

});

conexao.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso");
})




const app = express();
routes(app);







export default app;


//mongodb+srv://admin:admin123@cluster0.t77qsfr.mongodb.net/?retryWrites=true&w=majority

