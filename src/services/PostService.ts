import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {IPost} from "../models/IPost.ts";


export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000'
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], void>({
            query: () => ({
                url: '/posts',
            })
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            })
        })
    })
});