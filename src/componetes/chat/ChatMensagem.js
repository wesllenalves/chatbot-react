import React, {Component} from 'react'
import { InputGroup, InputGroupAddon, Input, Button} from 'reactstrap'
import {connect} from 'react-redux'


import {enviaMensagem} from './../../store/actions/chat'
import {conversaWatson}  from './../../store/actions/watson'
class ChatMensagem extends Component {
    constructor(props){
        super(props)
        this.inputEnviaTexto = this.inputEnviaTexto.bind(this)
    }
    inputEnviaTexto(e){
        if(e.keyCode === 13){
            console.log(e.target.value)
            this.props.enviaTexto(e.target.value)
            this.props.conversaWatson(e.target.value)
        
    }

    render(){
        return (
            <div className="chat-mensagem">
            <hr />
            <InputGroup>
                <Input onKeyDown={this.inputEnviaTexto} placeholder='Digite sua mensagem' />
                <InputGroupAddon addonType='append'>
                    <Button color="success">Enviar</Button>
                </InputGroupAddon>
            </InputGroup>           
            </div>
        )
    }
    
}

const mapDispatchToProps = (dispatch) =>{
    return {
        enviaTexto: (msg) => dispatch(enviaMensagem(msg)),
        conversaWatson: (msg) => dispatch(conversaWatson(msg, ''))
    }
}
export default connect(null, mapDispatchToProps)(ChatMensagem)