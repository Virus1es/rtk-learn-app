import React, {useState} from 'react';
import {postAPI} from "../services/PostService.ts";
import PostItem from "./PostItem.tsx";
import type {IPost} from "../models/IPost.ts";

const PostContainer = () => {
    const [limit, setLimit] = useState(120);
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit);

    const [createPost, {}] = postAPI.useCreatePostMutation();

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost);
    }

    return (
        <div className="post__list">
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Идёт загрузка</h1>}
            {error && <h1 style={{color: 'red'}}>Произошла ошибка</h1>}
            {posts?.data && posts.data.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostContainer;