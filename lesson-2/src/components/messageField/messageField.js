import React from "react"
import { Message } from "../message"

export class MessageField extends React.Component {
    state = {
        messages: [{ author: "User", value: "Привет !"/* , date: new Date() */ }],
    }

    componentDidUpdate() {
        const { messages } = this.state

        const lastMassage = messages[messages.length - 1]

        if (lastMassage.author === "User") {
            setTimeout(() => {
                this.setState({
                    messages: [
                        ...messages,
                        { author: "Bot", value: "как дела ?"/* , date: new Date() */ }
                    ],
                })
            }, 500);
        }
    }

    sendMessage = () => {
        const { messages } = this.state

        this.setState({
            messages: [
                ...messages,
                { author: "User", value: "как дела ?"/* , date: new Date() */ }
            ],
        })
    }

    render() {
        const { messages } = this.state


        return (
            <div>
                <button onClick={this.sendMessage}>отправить</button>
                {messages.map((message, index) => (
                    <Message message={message} key={index} />
                ))}
            </div>
        )
    }
}