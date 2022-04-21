import "./index.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CreatePlayList from "./page/createPlaylist";
import Login from "./page/login";
import {useSelector} from 'react-redux';
import Sidebar from "./Component/Navbar";
import SearchConcert from "./page/cityConcert/songkick";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
  <div className='app'>
    <Router>


    <Switch>
      <Route path={"/create-playlist"}>
        <Sidebar />
        {isLogin ? (
          <CreatePlayList />
        ):(
          <Redirect to={"/"}/>
      )}
      </Route>
      <Route path="/search-concert">
        <Sidebar />
        <SearchConcert />
      </Route>
      <Route path={"/"} >
        <Login/>
      </Route>
    </Switch>

  </Router>
 </div>
  );
}

export default App;
