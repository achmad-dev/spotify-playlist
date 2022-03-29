import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import albumsReducer from '../reducer/albums';
import artistsReducer from '../reducer/artists';
import playlistReducer from '../reducer/playlist';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    albums: albumsReducer,
    artists: artistsReducer,
    playlist: playlistReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
