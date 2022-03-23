

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const RedApp = () => {

    const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const Increment = () => {
        dispatch({type: 'INC'})
    }

    const Decrement = () => {
        dispatch({type: 'DEC'})
    }
  return (
    <div>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={Increment}>Inc</button>
        <button onClick={Decrement}>Dec</button>
    </div>
  )
}

export default RedApp