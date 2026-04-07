import './styles/App.css';
import {userSlice} from "./store/reducers/UserSlice.ts";
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";

function App() {
    const {count} = useAppSelector(state => state.userReducer)
    const {increment} = userSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div className="app">
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment(10))}>Increment</button>
        </div>
    )
}

export default App;
