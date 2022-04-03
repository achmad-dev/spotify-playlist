import Link from "../link";
import "./style.css";
const Profile = ({ userData }) => {
  const isLoading = userData.display_name === undefined;
  const { external_urls, display_name, images } = userData;
  return isLoading ? (
    <div className='container'>Loading...</div>
  ) : (
    <div className='container'>
      <img className='image' src={images[0]?.url} alt={display_name} />
      <Link href={external_urls.spotify} className='name'>
        {display_name}
      </Link>
    </div>
  );
};

export default Profile;
