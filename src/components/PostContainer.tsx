import React from 'react';
import {postAPI} from "../services/PostService.ts";
import PostItem from "./PostItem.tsx";

const PostContainer = () => {
    const {data: posts} = postAPI.useFetchAllPostsQuery(5);

    return (
        <div className="post__list">
            {posts && posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostContainer;