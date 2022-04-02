import Button from '../Button';
import './style.css';
import { FaSpotify } from 'react-icons/fa';
import { redirect } from '../../lib/auth.js';
import SearchBar from '../searchBar';

const Navbar = ({auth}) => {
  const isAuth = auth?.access_token !== undefined;
  return (
    <div className='navbar'>
    {!isAuth ? (
      <SearchBar handleSearch={handleSearch}/>
    ) : (
      <Button
        onClick={() => redirect()}
        leftIcon={<FaSpotify/>}
        > Login
      </Button>
  )}
     </div>
  );
};

export default Navbar;
