import { Component } from "react";

class TaskList extends Component {
    state = {
        inputText: "",
        tasks: [{
            id: 0,
            text: "прийти на урок"
        }, {
            id: 1,
            text: "виконати дз"
        }, {
            id: 2,
            text: "Здати дз"
        }]
    }

    handlerDelete = (taskId) => {
        this.setState({
            tasks: this.state.tasks.filter(({ id }) => id !== taskId)
        })
    }

    render() {
        return (
            <>
                <input type="text" value={this.state.inputText}/>
                <button type="button">Додати</button>
                <ul>{this.state.tasks.map(({ id, text }) => {
                    return (
                        <li key={id}>
                            <p>{id}</p>
                            <p>{text}</p>
                            <button type="button" onClick={() => this.handlerDelete(id)}>Видалити</button>
                        </li>
                    )
                })}</ul>
            </>
        )
    }
}

export default TaskList