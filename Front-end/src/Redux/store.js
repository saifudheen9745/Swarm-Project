import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from './Slices/userSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import themeReducer from './Slices/themeSlice';
import  asideReducer  from './Slices/asideSlice';

const persistConfig = {
    key:'root',
    storage
}

const reducers = combineReducers({
    userReducer,
    themeReducer,
    asideReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer:{
        persistedReducer
    },
    middleware:[logger],
    
})