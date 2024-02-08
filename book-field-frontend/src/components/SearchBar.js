import './searchBar.css'

function SearchBar() {
    return(
        <div className='search-container'>
            <form >
                <input type='text' placeholder='Search books...' name='search' />
                <button type='submit'><i class='fa fa-search'></i></button>
            </form>
        </div>
    );
}

export default SearchBar;