import React, {Component} from 'react'
import { Button } from 'reactstrap';
class Home extends  Component  {
    render(){
        return (
            <div className="home">
                <p className="App-intro">
                     <p>Um Simples chatbot para trabalhar via web.</p>
                     <p>Integrado via react e IBM watson assistant.</p>
                </p>
                <Button color="danger">Danger!</Button>
            </div>
            
        )
    }
}

export default Home