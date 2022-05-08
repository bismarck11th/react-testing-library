import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount, fetchDummy } from './features/customCounter/customCounterSlice';

const ReduxAsync = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <span data-testid="count-value">{count}</span>
      <button onClick={() => dispatch(fetchDummy(5))}>fetchDummy</button>
    </div>
  );
};

export default ReduxAsync;
