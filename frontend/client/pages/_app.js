import '@/styles/globals.css';
import Navi from '@/components/UI/Navi';
import 'bootstrap/dist/css/bootstrap.min.css';
import reduxStore from '../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


export default function App({ Component, pageProps }) {
  let persisor = persistStore(reduxStore);
	return (
		<Provider store={reduxStore}>
			<PersistGate persistor={persisor}>
				<Navi />
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	);
}
