import { nanoid } from "nanoid";
import { Component } from "react";
import style from "./TaskList.module.css";

class TaskList extends Component {
  state = {
    inputText: "",
    tasks: [
      { id: 0, text: "Прийти на урок" },
      { id: 1, text: "Виконати дз" },
      { id: 2, text: "Здати дз" }
    ]
  };

  handlerDelete = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter(({ id }) => id !== taskId)
    });
  };

  handlerInput = (event) => {
    this.setState({
      inputText: event.target.value
    });
  };

  handlerAdd = () => {
    if (this.state.inputText.trim() === "") return;

    const newTask = {
      id: nanoid(4),
      text: this.state.inputText
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
      inputText: ""
    });
  };

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.inputBox}>
          <input
            className={style.input}
            onChange={this.handlerInput}
            type="text"
            value={this.state.inputText}
          />
          <button className={style.addBtn} onClick={this.handlerAdd}>
            Додати
          </button>
        </div>

        <ul className={style.list}>
          {this.state.tasks.map(({ id, text }) => (
            <li className={style.item} key={id}>
              <span className={style.text}>{text}</span>
              <button
                className={style.deleteBtn}
                onClick={() => this.handlerDelete(id)}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;