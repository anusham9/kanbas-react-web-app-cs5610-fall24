import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterReducer';
export default function CounterRedux() {
  const { count } = useSelector((state: any) => state.counterReducer);
  // used to send over event to controller
  const dispatch = useDispatch();
  return (
    <div id="wd-counter-redux">
      <h2>Counter Redux</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>Increment </button>
      <button onClick={() => dispatch(decrement())}>Decrement </button>
      <hr />
    </div>
  );
}
