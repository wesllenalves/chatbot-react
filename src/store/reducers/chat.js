const INITIAL_STATE = {
    mensagens: []
}
export default function chat(state = INITIAL_STATE, action){
    if (action.type === 'ENVIA_MENSAGEM') {
        return {
            mensagens:[...state.mensagens, action.payloud.mensagem]
        }
    }else{
        return state
    }
    
}