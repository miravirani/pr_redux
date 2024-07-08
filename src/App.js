import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import MockApiCreate from './component/mockApiCreate';
import MockApiView from './component/mockApiView';
import Navigation from './component/Navigations/Navigation';


function App() {
  return (
    <>

      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}

export default App;
