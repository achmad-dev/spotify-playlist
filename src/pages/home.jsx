import Main from "../layout/main";
import { login, storeUserData } from "../store/user";
import { getProfile } from "../utils/spotify";
import { Auth } from "../utils/useUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/home-header";
import { useHistory } from "react-router-dom";

//make home component
const Home = () => {
    const { isAuthenticated, callback } = Auth();
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        //check if user not authenticated then read access_token from hash url
        if (!isAuthenticated && window.location.hash) {
        const { access_token } = callback();
        if (access_token) {
            //if access_token is valid, try to get userData using spotify api
            getProfile(access_token).then((res) => {
            dispatch(login(access_token));
            dispatch(storeUserData(res));
            });
        }
        } else if (isAuthenticated) {
        history.push("/create-playlist");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);
    return (
        <Main>
        <Header />
        </Main>
    );
    };
    //export home component
    export default Home;