import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Spec = ({ match }) => {

    const { id, detailId, filmId } = match.params;
    const [spec, setSpec] = useState({ films: [] });

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/species/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setSpec(result)
                }
            )
    }, [])

    const films = spec.films.map((el, ind) => {


        const arr = el.split('/');
        const id = arr[arr.length - 1];


        return (<div key={ind}>
            <Link to={`/${detailId}/films/${filmId}`}>
                {el}
            </Link>
        </div>)
    })

    return (
        <div>

            <Link to='/'>go home</Link>
            <div></div>
            <Link to={`/${detailId}`}>return to detail</Link>
            <div></div>
            <Link to={`/${detailId}/films/${filmId}`}>return to film</Link>

            <h1>
                spec component
            </h1>
            <div>
                {spec.name}
            </div>
            <div>
                {spec.classification}
            </div>
            {films}
        </div>
    )
}

export default Spec 