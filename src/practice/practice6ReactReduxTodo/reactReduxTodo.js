import React from 'react';
import List from './components/List/List';
import Form from './components/Form';
import Post from './components/Posts';
import MyReq from './components/MyReq';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import Practice3 from '../practice3Router/Practice3_router'

function ReactReduxTodo() {
    return (
        <div>
            <h1>Practice 1 filterable table</h1>
            <FilterableProductTable />
            <h1>practice 6: react redux</h1>
            <List />
            <Form />
            <Post />
            <MyReq />
            <h1>practice 3: react-router</h1>
            <Practice3 />
        </div>
    )
}

export default ReactReduxTodo
