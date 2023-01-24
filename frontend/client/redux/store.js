import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login';
import signupPageToggle from './signup';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from './asyncStorage';
const persistConfiguration = {
	key: 'root',
	version: 1,
	storage
};
const reducer = combineReducers({
	login: loginReducer,
	signup: signupPageToggle,
});

const persistedReducer = persistReducer(persistConfiguration, reducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export default store;
