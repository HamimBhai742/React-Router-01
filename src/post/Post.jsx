import { Link } from "react-router-dom";
const Post = ({ post }) => {
    const { id, name, email } = post;
    console.log(email.split('_')[0,1]);
    console.log(email.split('.')[1]);
    return (
        <div className="text-center border-2 border-violet-600 p-2 rounded-xl font-serif ">
            <h3>ID: {id}</h3>
            <h3>Name: {name.split(' ')[1]}</h3>
            <h3>E-Mail: {email.split('.')[0]}.{email.split('.')[1]}</h3>
            <Link to={`/post/${id}`}><button className="bg-purple-600 p-3 rounded-xl font-semibold text-white mt-3">Show Details</button></Link>
        </div>
    );
};

export default Post;