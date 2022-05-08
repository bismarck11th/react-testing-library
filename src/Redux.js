import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount
} from './features/customCounter/customCounterSlice';

const Redux = () => {
  const [number, setNumber] = useState(0);
  console.log(number);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Integration Test</h3>
      <duv>
        <button onClick={() => dispatch(increment())}>+</button>
        <span data-testid="count-value">{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(number | 0))}>incrementByAmount</button>
        <input
          type="text"
          placeholder="Enter"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
      </duv>
    </div>
  );
};

export default Redux;
