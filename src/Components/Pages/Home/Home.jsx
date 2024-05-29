import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Counter from './Counter';
import { produce } from 'immer';

const Home = () => {

    let demon = [
        'Arif',
        'Sakib',
        'Rahim',
        'Rony',
        'Tamim',
        'Mashrafe',
        'Shakib',
        'Mahmudullah',
    ]


    const nextState = produce(demon, (draft) => {
        draft.push('Rubel');
        draft.push('Rakib');
    })

    console.log(nextState)

    return (
        <Provider store={store}>
            <Counter></Counter>
        </Provider>
    );
};

export default Home;