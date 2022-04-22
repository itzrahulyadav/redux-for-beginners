import { useSelector,useDispatch} from 'react-redux';
import './App.css';
import actions from './store/index'

function App() {

  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  const increment = () => {
     dispatch(actions.increment());
  }
  const decrement = () => {
     dispatch(actions.decrement());
  }
  const addBy = () => {
    dispatch(actions.addBy(10));
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <button onClick = {increment}>increment</button>
      <button onClick = {decrement}>decrement</button>
      <button onClick = {addBy}>add by 10</button>
    </div>
  );
}

export default App;
