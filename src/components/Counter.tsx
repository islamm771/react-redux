import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux"
import { increment } from "../app/features/CounterSlice";

const Counter = () => {
    const {value} = useSelector((state:RootState) => state.counter)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter: {value}</h1>
        <button
        className="bg-indigo-500 text-white p-3 rounded-md mt-2"
        onClick={() => dispatch(increment())}
        >Increase</button>
    </div>
  )
}

export default Counter