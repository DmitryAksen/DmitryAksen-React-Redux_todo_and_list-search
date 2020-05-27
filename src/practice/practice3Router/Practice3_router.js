import React, { useState, useEffect } from 'react'
import Detail from './Datail/Detail'
import Film from './Film/Film'
import Spec from './Spec/Spec';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Practice3() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <BrowserRouter>

                <Switch>
                    <Route exact path={`/`}>
                        <ul>
                            {items.map(item => (

                                <li key={item.id}>
                                    <Link to={`/${item.id}`}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </Route>

                    <Route exact path={"/:id"} component={Detail} />

                    <Route exact path={"/:detailId/films/:id"} component={Film} />

                    <Route path={'/:detailId/films/:filmId/species/:id'} component={Spec} />


                </Switch>
            </BrowserRouter>

        );
    }
}

export default Practice3



