import { useSelector } from 'react-redux';
import { ProfileStyle } from './style';

const UserProfilePage = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <div className={ProfileStyle}>
            <h1>User Profile</h1>
            <h3>{user.display_name}</h3>
            <img src={user.images.length < 0 ? user.images[0].url : 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg'} alt={user.display_name} />
            <h3>{user.email}</h3>
            <h3>{user.country}</h3>
            <h3>{user.id}</h3>
        </div>
    );
}

export default UserProfilePage;
