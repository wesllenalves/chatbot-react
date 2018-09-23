export const enviaMensagem = (mensagem) =>{
    return {
    type:'ENVIA_MENSAGEM',
    payloud: {mensagem}
    }
}