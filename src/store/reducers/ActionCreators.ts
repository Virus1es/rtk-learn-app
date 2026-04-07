import type {AppDispatch} from "../store.ts";
import axios from "axios";
import type {IUser} from "../../models/IUser.ts";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
    } catch (e) {
        console.error(e);
    }
}