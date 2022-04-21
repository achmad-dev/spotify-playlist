import "./index.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CreatePlayList from "./page/createPlaylist";
import Login from "./page/login";
import {useSelector} from 'react-redux';
import styled from 'styled-components';
const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  `;

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
  <Div className='app'>
    <Router>


    <Switch>
      <Route path={"/create-playlist"}>
        {isLogin ? (
          <CreatePlayList />
        ):(
          <Redirect to={"/"}/>
      )}
      </Route>
      <Route path={"/"} >
        <Login/>
      </Route>
    </Switch>

  </Router>
 </Div>
  );
}

export default App;
