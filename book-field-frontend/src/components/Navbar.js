import SearchBar from './SearchBar';
import UserButtons from './UserButtons';
import './navbar.css'
function Navbar () {
    return (
        <div className="navigation">
           <SearchBar></SearchBar>
            <UserButtons></UserButtons>
        </div>
    );
}

export default Navbar;