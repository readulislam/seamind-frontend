import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ToggleSlice from './ToggleSlice';
import authSlice from './authSlice';

// persist config storage

const persistConfig = {
  key: 'root',
  version: '1',
  storage,
};

// put all slice inside rootReducer
// property key write as like below

const rootReducer = combineReducers({
  toggle: ToggleSlice,
  auth: authSlice,
});

// persisted all reducers inside persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store configure
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
