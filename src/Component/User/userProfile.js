//make a component to show username from spotify
//import userSelector from react-redux
import { Style } from './style';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    //make const to get user from redux
    const userData = useSelector((state) => state.auth.user.display_name);
    return (
        <div className={Style}>
            <p>spotify username: {userData}</p>
        </div>
    );
    }
export default UserProfile;
