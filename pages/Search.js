import React from 'react';
import './search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

function Search() {

    return(
    <div className='search'>
        <div className='search__input'>
<SearchIcon className="search__inputIcon" />
       <input />
       <MicIcon />
        </div>

        <div className="search__buttons">
        <Button variant="outlined ">Martle Search</Button>
        <Button variant="outlined">How are you today.</Button>
        </div>
    </div>
    );

}

export default Search;
