import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";

const Posts = () => {
    const posts=useLoaderData()
    return (
        <div className="mt-3">
            <h3 className="text-center text-3xl font-bold">Posts: {posts.length}</h3>
           <div className="grid grid-cols-4 gap-3 mt-4">
           {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
           </div>
        </div>
    );
};

export default Posts;