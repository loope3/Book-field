import { useState } from 'react';
import { useBookSearch } from '../customHooks/useBookSearch';
import './searchBar.css'

function SearchBar() {

    const [search, setSearch] = useState('');
    
    function formatSearch(input) {
        let result = input.split(' ').join('+');
        setSearch(result);
    }

    const {searchData, error, loading, search: searchFunc} = useBookSearch(search);

    return(
        <div className='search-container'>
            <form >
                <input id='searchInput' type='text' placeholder='Search books...' name='search' onChange={e => {
                      let searchValue = document.getElementById('searchInput');
                      formatSearch(searchValue.value);
                }} />
                <button type='submit' onClick={e=> {
                    e.preventDefault();
                    searchFunc(search);
                }}><i className='fa fa-search'></i></button>
            </form>
        </div>
    );
}

export default SearchBar;