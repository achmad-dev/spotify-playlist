import {FaSpotify} from 'react-icons/fa';
import SpotifyButton from '../button';
import {Auth} from '../../utils/auth';

//make header component
const Header = () => {
    //make auth function as redirect
    const {redirect} = Auth();
    //return header component
    return (
        <div className="header">
            <div className="header__text">
                <h1 className="header__title">Meongfy?</h1>
            </div>
            <div className="header__buttons">
                <SpotifyButton
                    onClick={() => redirect()}
                    leftIcon={<FaSpotify fontSize="20px" />}
                >
                    Login With Spotify
                </SpotifyButton>
            </div>
        </div>
    );
};

//export header component
export default Header;