import React from 'react'

const SearchBar = ({ handleChange, handleChnageStatus, title }) => {
    return (
        <div>
            <div>
                <label htmlFor='name'>type name</label>
            </div>
            <div>
                <input type='text' id='name' value={title} onChange={handleChange} />
            </div>
            <div>
                <input type='checkbox' onChange={handleChnageStatus} />
                Only show products in stock
            </div>

        </div>
    )
}

export default SearchBar
