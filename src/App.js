import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from './redux/slices/counterSlice';
import {
  increaseAge,
  decreaseAge,
  increaseAgeBy,
  updateUsername,
  deleteUsername,
} from './redux/slices/userSlice';

function App() {
  // useSelector hook is used to extract “value” from the global state.
  // We can read data from the store with useSelector
  const count = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);
  // We can dispatch actions using useDispatch - send the dispatched action
  // to the reducer to immutabley update the store value
  const dispatch = useDispatch();
  // Local Component state
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [usernameInput, setUsernameInput] = useState('');
  const [ageIncrementAmount, setAgeIncrementAmount] = useState('0');

  return (
    <div className='App' style={{ padding: 20 }}>
      <h4>This is the count: {count}</h4>
      <h4>Username: {user.username}</h4>
      <h4>Alias: {user.alias}</h4>
      <h4>UserID: {user.id}</h4>
      <h4>Age: {user.age}</h4>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div>
        <input
          aria-label='Set increment amount'
          placeholder='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
      <div>
        <input
          aria-label='Set new username'
          placeholder='Set new username'
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <button onClick={() => dispatch(updateUsername(usernameInput))}>
          Update Username
        </button>
        <div>
          <input
            aria-label='Set Age increment by'
            placeholder='Set Age increment by'
            value={ageIncrementAmount}
            onChange={(e) => setAgeIncrementAmount(e.target.value)}
          />
          <button onClick={() => dispatch(increaseAge())}>+ Age</button>
          <button onClick={() => dispatch(decreaseAge())}>- Age</button>
          <button
            onClick={() =>
              dispatch(increaseAgeBy(Number(ageIncrementAmount) | 0))
            }
          >
            + {ageIncrementAmount}
          </button>
          <button
            onClick={() => {
              dispatch(deleteUsername(), setUsernameInput(''));
            }}
          >
            Delete Username
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
