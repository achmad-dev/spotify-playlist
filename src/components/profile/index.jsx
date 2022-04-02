import Link from "../Link";
import style from "./style.module.css";
const Profile = ({ userData }) => {
  const isLoading = userData.display_name === undefined;
  const { external_urls, display_name, images } = userData;
  return isLoading ? (
    <div className={style.container}>Loading...</div>
  ) : (
    <div className={style.container}>
      <img className={style.image} src={images[0]?.url} alt={display_name} />
      <Link href={external_urls.spotify} className={style.name}>
        {display_name}
      </Link>
    </div>
  );
};

export default Profile;
