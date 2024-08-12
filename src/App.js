import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './component/Navigations/Navigation';
import { socket, socketContext } from './Context/socket';

function App() {
    return (
        <>
            <Provider store={store}>
                <socketContext.Provider value={socket}>
                    <Navigation />
                </socketContext.Provider>
            </Provider>
        </>
    )
}
export default App;


