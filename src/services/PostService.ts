import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {IPost} from "../models/IPost.ts";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            })
        })
    })
});