import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Detail({ match }) {

    const id = match.params.id;
    const [detail, setDetail] = useState({ films: [] });

    useEffect(() => {

        fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setDetail(result)
                }
            )
    }, [])

    const films = detail.films.map((film, index) => {
        const str = film;
        const arr = str.split('/');
        const lastItem = arr[arr.length - 1];

        return (

            <div key={index}>
                film: <Link to={`${match.url}/films/${lastItem}`}>{film}</Link>
            </div>
        )

    })

    return (
        <div>
            <Link to='/'>go home</Link>
            <h1>
                detail component
        </h1>

            <div>{detail.name}</div>
            <div>
                gender: {detail.gender}
            </div>
            <div>
                age: {detail.age}
            </div>
            {films}
        </div>
    );

}

export default Detail
