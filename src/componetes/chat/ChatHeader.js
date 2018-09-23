import React from 'react'
import { Alert} from 'reactstrap'
const ChatHeader = props => {
    return (
        <div className="chat-header">
            <Alert color='dark'>
                <h2>ChatBot</h2>
            </Alert> 
        </div>
    )
}
export default ChatHeader