import './styles/App.css';
import {userSlice} from "./store/reducers/UserSlice.ts";
import {useAppDispatch, useAppSelector} from "./hooks/redux.ts";
import {useEffect} from "react";
import {fetchUsers} from "./store/reducers/ActionCreators.ts";

function App() {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);



    return (
        <div className="app">
            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1 style={{color: 'red'}}>Ошибка: {error}</h1>}
            {users.length > 0 && JSON.stringify(users, null, 2)}
        </div>
    )
}

export default App;
