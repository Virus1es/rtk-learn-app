import './styles/App.css';
import PostContainer from "./components/PostContainer.tsx";

function App() {
    // const dispatch = useAppDispatch();
    // const {users, isLoading, error} = useAppSelector(state => state.userReducer);
    //
    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, []);



    return (
        <div className="app">
            {/*{isLoading && <h1>Идёт загрузка...</h1>}*/}
            {/*{error && <h1 style={{color: 'red'}}>Ошибка: {error}</h1>}*/}
            {/*{users.length > 0 && JSON.stringify(users, null, 2)}*/}
            <PostContainer/>
        </div>
    )
}

export default App;
