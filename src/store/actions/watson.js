import axios from 'axios'

export const conversaWatsonRequest = ()=>{
	return {
		type: 'CONVERSA_WATSON_REQUEST',
		carregando: true,
		erro: false
	}
}

export const conversaWatsonSucess = (respostas) =>{
	return {
		type: 'CONVERSA_WATSON_SUCESS',
		respostas,
		carregando:true,
		erro:false
	}
}

export const conversaWatsonError = () =>{
	return {
		type: 'CONVERSA_WATSON_ERROR',		
		carregando:false,
		erro:true
	}
}

export const conversaWatson = ((mensagem, contexto) => {
	return dispacth => {
		dispacth(conversaWatsonRequest())
		//chama o backand do watson (firebase clound function)
		const url = 'https://us-central1-chatbot-react.cloudfunctions.net/conversa'
		axios
		.post(url, {mensagem, contexto})
		.then((data) => dispacth(conversaWatsonSucess(data)))
		.catch(() => dispacth(conversaWatsonError())
	}
})

/*conversaWatson(mensagem, contexto)
conversaWatsonRequest() =>
conversaWatsonSucess(resposta)
conversaWatsonError()*/