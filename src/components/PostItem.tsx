import React, {FC} from 'react';
import type {IPost} from "../models/IPost.ts";

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}: PostItemProps) => {
    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        remove(post);
    }

    const handleUpdate = (e: React.MouseEvent) => {
        e.stopPropagation();
        const title = prompt() || "";
        update({...post, title});
    }

    return (
        <div className="post" onClick={handleUpdate}>
            {post.id}. {post.title}
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default PostItem;