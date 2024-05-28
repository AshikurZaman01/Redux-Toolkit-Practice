import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./Redux/features/Counter/counterSlice";

const Counter = () => {

    const { count } = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <div>
                    <h1 className="text-5xl text-center mb-10">{count}</h1>
                </div>

                <button onClick={() => dispatch(increment())} className="btn btn-md btn-primary mr-5">+</button>

                <button onClick={() => dispatch(decrement())} className="btn btn-md btn-accent">-</button>
            </div>
        </div>
    );
};

export default Counter;