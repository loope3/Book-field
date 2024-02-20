import { useState } from 'react';
import './searchBar.css'

function SearchBar() {

    const [search, setSearch] = useState('');

    function formatSearch(input) {

        let result = input.split(' ').join('+');
        setSearch(result);
        console.log(result);
        return result;
    }

    return(
        <div className='search-container'>
            <form >
                <input id='searchInput' type='text' placeholder='Search books...' name='search' />
                <button type='submit' onClick={e=> {
                    e.preventDefault();
                    let searchValue = document.getElementById('searchInput');
                    formatSearch(searchValue.value);
                }}><i className='fa fa-search'></i></button>
            </form>
        </div>
    );
}

export default SearchBar;