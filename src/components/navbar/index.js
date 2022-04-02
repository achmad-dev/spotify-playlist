import Button from '../Button';
import './style.css';
import { FaSpotify } from 'react-icons/fa';
import { redirect } from '../../lib/auth.js';
import SearchBar from '../searchBar';
import Profile from "../profile";

const Navbar = ({userData, handleSearch}) => {
  const isAuth = userData?.access_token !== undefined;
  return (
    <div className='navbar'>
    {!isAuth ? (
      <>
        <SearchBar handleSearch={handleSearch}/>
        <Profile userData={userData}/>
      </>
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
