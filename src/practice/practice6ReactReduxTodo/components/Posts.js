import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/action'


const mapStateToProps = (state) => {
    return { remoteTodos: state.remoteTodos.slice(0, 10) }
}

export class Post extends Component {

    componentDidMount() {
        this.props.getData();
    }


    render() {
        return (
            <ul>
                {this.props.remoteTodos.map(el => {
                    return <li key={el.id}>{el.title}</li>
                })}
            </ul>
        )
    }
}

export default connect(
    mapStateToProps, { getData }
)(Post)

