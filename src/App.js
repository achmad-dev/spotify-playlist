import './index.css'
import Login from "./page/login";
import CreatePlayList from "./page/createPlaylist";
import SearchConcert from "./page/cityConcert/songkick";
import Sidebar from "./Component/sideBar";
import { useSelector } from "react-redux";
import { Grid } from '@chakra-ui/react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {
    const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <BrowserRouter>
      <Grid as={'main'} templateColumns={isLogin ? '1fr 4fr' : '1fr'}>
        {isLogin && <Sidebar />}
        <Switch>
          <Route exact path="/create-playlist">
            {isLogin ? <CreatePlayList /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/search-concert">
            {isLogin ? <SearchConcert /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Grid>
    </BrowserRouter>
  )
}

export default App
