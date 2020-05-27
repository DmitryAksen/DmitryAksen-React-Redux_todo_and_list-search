import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'


const mapStateToProps = (state) => {
    return { todos: state.todos }
}

const ConnectedList = ({ todos }) => {

    return (
        <ul>
            {todos.map((item, index) => (

                <Item item={item} index={index} key={index}/>
            ))}
        </ul>
    )
};

const List = connect(mapStateToProps)(ConnectedList)

export default List


