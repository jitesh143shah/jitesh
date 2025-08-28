import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../utils/createSlice ";

function Redux() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter);
  function handleInc() {
    dispatch(increment("data"));
  }
  function handleDec() {
    dispatch(decrement("data"));
  }
  function handleReset() {
    dispatch(reset("data"));
  }
  return (
    <div className="flex flex-col">
      <h1>{data.value}</h1>

      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Redux;
