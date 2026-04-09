import React from 'react';
import {postAPI} from "../services/PostService.ts";
import PostItem from "./PostItem.tsx";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5);

    return (
        <div className="post__list">
            {isLoading && <h1>Идёт загрузка</h1>}
            {error && <h1 style={{color: 'red'}}>Произошла ошибка {error}</h1>}
            {posts && posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostContainer;