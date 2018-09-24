const functions = require('firebase-functions');
const watson = require('watson-developer-cloud/assistant/v1')
require('dotenv').config()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 //exports.helloWorld = functions.https.onRequest((request, response) => {
 // response.send("Hello from Firebase!");
 //});

 const chatbot = new watson({
 	username: process.env.NAME,
 	password: process.env.PASSWORD,
 	version: process.env.VERSION,
 })

 const workspace_id = process.env.WORKSPACE_ID;

 exports.conversa = functions.https.onRequest((req, res) =>{
 	let payloud = {
 		workspace_id,
 		context: req.body.context || {},
 		input: req.body.input || {},
 	};

 	chatbot.message(payloud, function(err, data){
 		if(err){
 			return res.status(err.code || 500).json(err)
 		}

 		return res.json(trataResposta(payloud, data))
 	})
 })

 const trataResposta = (payloud, resposta) => {
 	console.log('Watson disse: ', resposta.output.text[0]);
 	return resposta;
 }
