import Home from "./pages/home";
import Navbar from "./components/navbar";
import CreatePlaylist from "./pages/create-playlist";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route";
function App() {
    return (
        <Provider store={store}>
        <Router>
            <Navbar />
            <Switch>
            <PrivateRoute exact path="/create-playlist">
                <CreatePlaylist />
            </PrivateRoute>
            <Route exact path="/">
                <Home />
            </Route>
            </Switch>
        </Router>
        <Toaster position="bottom-center" />
        </Provider>
    );
    }
    //export App component
    export default App;