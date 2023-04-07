import { Component } from 'react';
class AddTodo extends Component {
    state = {
        title: '',
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }
    handleAddTodo = () => {
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNew(todo);
    }
    render() {
        let { title } = this.state;
        return (
            <div>
                <input
                    placeholder="Nhập vào tên Task"
                    value={title} onChange={(event) => this.handleOnChangeTitle(event)}
                    type="text" />
                <button
                    type="button"
                    onClick={() => this.handleAddTodo()}
                >Thêm Task mới</button>
            </div>
        )
    }
}
export default AddTodo;