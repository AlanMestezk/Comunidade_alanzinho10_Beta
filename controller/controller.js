const res = require("express/lib/response")


const controller = {
    textoHome: (req, res)=>{
        let textos={
            nomehome:"Alan  Mvc",
            titulo: "ESTA É A COMUNIDADE ALANZINHO10",
            textoMeio:"Bem vindo",
            cadastresse:"Já possui cadastro?",
            textomoti:"AQUI A IMAGINAÇÃO VAI LONGE"
            
        }
        return res.render('home', textos)
    },
    cadastro: (req, res)=>{
        let textos={
            nomehome:"Alan  Mvc",
            titulo: "ESTA É A PAGINA ALANZINHO10",
            textoMeio:"Bem vindo",
            cadastresse:"Já possui cadastro?",
          
            
        }

        res.render('cadastre', textos)
    },
    login: (req, res)=>{
        let textos={
            nomehome:"Alan  Mvc",
            titulo: "ESTA É A PAGINA ALANZINHO10",
            textoMeio:"Bem vindo",
            cadastresse:"Já possui cadastro?",
        }

        res.render('login', textos)
    },
    contato: (req, res)=>{
        let {nome}=req.query
        res.render('contato', {nomeUsuario:nome})
    },
    confirmarcontato:(req, res)=>{
        let {nome, email} = req.query
        res.send('Recebido com sucesso as informações do: '+nome)
    },
    cadastrofeito: (req, res)=>{
        let {nome}= req.query
        let textos ={
            nomehome:"Alan  Mvc",
            textoMeio:"Bem vindo"
        }
        res.render('cadastrofeito', {nome:nome})
    },
    loginefetuado: (req, res)=>{
        let {nome} = req.query
        res.render('loginefetuado', {nome:nome})
    }


}

module.exports = controller