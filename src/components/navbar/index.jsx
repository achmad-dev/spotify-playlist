import Button from "../button";
import "./style.css";
import { FaSpotify } from "react-icons/fa";
import { redirect } from "../../lib/auth";
import SearchBar from "../search-bar";
import Profile from "../profile";
const Navbar = ({ userData, handleSearch, isLoading }) => {
  const isAuthenticated = userData?.access_token !== undefined;
  return (
    <div className='navbar'>
      {isAuthenticated ? (
        <>
          <SearchBar isLoading={isLoading} handleSearch={handleSearch} />
          <Profile userData={userData} />
        </>
      ) : (
        <Button
          onClick={() => redirect()}
          leftIcon={<FaSpotify fontSize="20px" />}
          style={{ marginLeft: "auto" }}
        >
          Login With Spotify
        </Button>
      )}
    </div>
  );
};

export default Navbar;
