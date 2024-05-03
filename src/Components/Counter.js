import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease,reset } from '../redux/features/counter/counterSlice';

const Counter = () => {
    const count = useSelector(state => state.counter.age);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={()=>dispatch(increase())}>Increase</button>
        <button onClick={()=>dispatch(decrease())}>decrease</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default Counter;
