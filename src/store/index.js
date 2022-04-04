import { configureStore } from '@reduxjs/toolkit';

import tokenReducer from './reduxSlice';

export default configureStore({
  reducer: {
    token: tokenReducer,
  },
});
