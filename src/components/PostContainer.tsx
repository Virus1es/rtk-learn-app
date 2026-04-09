import React from 'react';
import {postAPI} from "../services/PostService.ts";

const PostContainer = () => {
    const {data: posts} = postAPI.useFetchAllPostsQuery(5);

    return (
        <div>
            {posts.map( post =>
                <PostItem/>
            )}
        </div>
    );
};

export default PostContainer;