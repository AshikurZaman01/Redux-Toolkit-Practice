import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Counter from './Counter';

const Home = () => {
    return (
        <Provider store={store}>
            <Counter></Counter>
        </Provider>
    );
};

export default Home;