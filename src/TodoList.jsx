import { Component } from 'react';
import AddTodo from "./AddTodo";

class TodoList extends Component {
    state = {
        ListTodos: [
            { id: 'Task 1', title: 'Code giao diện' },
            { id: 'Task 2', title: 'Làm hiệu ứng' },
            { id: 'Task 3', title: 'Đọc tài liệu' },
        ],
        editTodo: {}
    }
    addNew = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todo],
        })
    }
    handleDeleteTodo = (todo) => {
        let curentTodos = this.state.ListTodos;
        curentTodos = curentTodos.filter(item => item.id !== todo.id);
        this.setState({
            ListTodos: curentTodos
        })
    }
    handleEditTodo = (todo) => {
        let { editTodo, ListTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...ListTodos];
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id);
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                ListTodos: listTodosCopy,
                editTodo: {}
            })
            return;
        }
        this.setState({
            editTodo: todo
        })
    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { ListTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <div>
                <div>
                    <div>
                        <h1>TodoList</h1>
                    </div>
                    <AddTodo addNew={this.addNew} />
                    <div>
                        <ul>
                            {ListTodos && ListTodos.length > 0 &&
                                ListTodos.map((item, index) => {
                                    return (
                                        <li key={item.id}>
                                            {isEmptyObj === true ?
                                                <span> {index + 1} - {item.title} </span>
                                                :
                                                <>
                                                    {editTodo.id === item.id ?
                                                        <span>
                                                            {index + 1} - <input
                                                                value={editTodo.title}
                                                                onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                            />
                                                        </span>
                                                        :
                                                        <span>
                                                            {index + 1} - {item.title}
                                                        </span>
                                                    }
                                                </>
                                            }
                                            <button onClick={() => this.handleEditTodo(item)}>
                                                {isEmptyObj === false && editTodo.id === item.id ?
                                                    'Save' : 'Edit'
                                                }
                                            </button>
                                            <button onClick={() => this.handleDeleteTodo(item)}>delete</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default TodoList;