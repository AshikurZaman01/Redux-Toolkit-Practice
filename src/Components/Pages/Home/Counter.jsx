
const Counter = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <div>
                    <h1 className="text-5xl text-center mb-10">0</h1>
                </div>
                <button className="btn btn-md btn-primary mr-5">+</button>
                <button className="btn btn-md btn-accent">-</button>
            </div>
        </div>
    );
};

export default Counter;