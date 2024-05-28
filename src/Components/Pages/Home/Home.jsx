import { Provider } from 'react-redux';
import { store } from './Redux/store';

const Home = () => {
    return (
        <Provider store={store}>

        </Provider>
    );
};

export default Home;