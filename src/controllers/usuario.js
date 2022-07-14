import usuarioRepository from "../models/usuariosModels.js";

async function findAll(request,response){
    const usuarios = await usuarioRepository.findAll();
    response.json(usuarios);
};

async function criarUsuario(request,response){
    const novoUsuario= await usuarioRepository.create({
        nome: request.body.nome,
        email: request.body.email,

});
response.json(novoUsuario);
 
}

async function usuarioDeletado(request,response){
    await usuarioRepository.destroy({
        where: {
            id: request.params.id
        }
    });
    response.json({mensagem: "Usuario Deletado"});
}

async function BuscaUsuario(request,response) {
    const usuario= usuarioRepository.findByPk(request.params.id);

    response.json(usuario);
}

export default { findAll, criarUsuario , usuarioDeletado, BuscaUsuario}