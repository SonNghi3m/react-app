import React, { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const incrementClick = () => {
        console.log("incrementClick");
        setCounter(counter + 1);
    }

    const decrementClick = () => {
        console.log("decrementClick");
        setCounter(counter - 1);

    }

    return (
        <div className='container'>
            <h3>Counter: {counter}</h3>
            <button type='button' className='btn btn-success' onClick={incrementClick}>Increment</button>
            <button type='button' className='btn btn-danger' onClick={decrementClick}>Decrement</button>
            <button type='button' className='btn btn-secondary' onClick={() => setCounter(0)}>Reset</button>
        </div>
    );
};
export default Counter;