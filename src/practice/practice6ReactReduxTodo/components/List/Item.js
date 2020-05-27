import React from 'react';
import {changeStatus} from '../../redux/action';
import {deleteTodo} from '../../redux/action'


import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
return {
    changeStatus: index => dispatch(changeStatus(index)),
    deleteTodo: index => dispatch(deleteTodo(index)),
}
}


function Item({item, deleteTodo, index, changeStatus}) {

    return (
        <li style={{color: item.status? 'red' : 'green', textDecoration: item.status? 'line-through' : '' }}>
            {item.title}
            <button onClick={()=>deleteTodo(index) }>DELETE</button>
            <button onClick={()=>changeStatus(index)}>DONE</button>
        </li>
    )
}



export default connect(null, mapDispatchToProps)(Item)
