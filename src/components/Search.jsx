import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';

const Search = ({value, handleInputChange, removeValue}) => {
    return (
        <div className="search">
            {value.length > 0 && <i onClick={removeValue}><AiOutlineClose /></i>}
            <input type="text" placeholder="Поиск..." className="search__input" value={value} onChange={(e) => handleInputChange(e.target.value)} />
        </div>
    );
}

export default Search;