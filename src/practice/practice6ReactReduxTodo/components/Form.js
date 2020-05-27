import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/action'


const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    }
}

export class ConnectedForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange = (event) => {
        this.setState({ title: event.target.value });
    }
    handleClick = (event) => {

        event.preventDefault()
        const { title } = this.state;

        this.props.addTodo({ title });
        this.setState({ title: '', status: false });

    }

    render() {

        const { title } = this.state;
        return (

            <form>
                <div>
                    <label htmlFor='title'>
                        type title
                    </label>
                </div>
                <input id='title' type='text' value={title} onChange={this.handleChange} />
                <button onClick={this.handleClick}>ADD</button>
            </form>

        )
    }
}

const Form = connect(
    null, mapDispatchToProps
)(ConnectedForm)

export default Form

