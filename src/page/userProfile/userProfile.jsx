import { useSelector } from 'react-redux';
import { Card } from '@mui/material';

const UserProfilePage = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <div>
        <h1>User Profile</h1>
        <h3>{user.display_name}</h3>
        <img src={user.images.url} alt={user.name} />
        <h3>{user.email}</h3>
        <h3>{user.country}</h3>
        <h3>{user.id}</h3>
        </div>
    );
}

export default UserProfilePage;
