import React, { useEffect } from 'react';
import { getFilms } from '../redux/action';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return { remoteFilms: state.remoteFilms.slice(0, 5) }
}

function MyReq({ getFilms, remoteFilms }) {


    useEffect(() => {
        getFilms()
    }, [])

    return (
        <ul>{
            
            remoteFilms.map((film, index) => {
                return (
                    <li key={index}>{film.title}</li>
                )
            })
        }
        </ul>
    )
}


export default connect(
    mapStateToProps, { getFilms }
)(MyReq);
