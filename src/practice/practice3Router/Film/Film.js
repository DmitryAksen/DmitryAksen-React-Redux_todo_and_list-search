
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Film({ match }) {

    const { id, detailId } = match.params

    const [film, setFilm] = useState({ species: [] });

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setFilm(result)
                }
            )
    }, [])



    const species = film.species.map((link, index) => {
        let arr = link.split('/');
        let id = arr[arr.length - 1];
        return (<div key={index}>
            <Link to={`${match.url}/species/${id}`}>
                {link}
            </Link>
        </div>)
    })


    return (
        <div>
        <Link to='/'>go home</Link>
        <div></div>
        <Link to={`/${detailId}`}>return to detail</Link>
        <h1>Film component</h1>
            <div>
                {film.title}
            </div>
            <div>
                {film.director}
            </div>
            <div>
                {species}
            </div>
        </div>
    );

}

export default Film
