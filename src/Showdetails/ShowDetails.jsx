import { useLoaderData,Link } from "react-router-dom";

const ShowDetails = () => {
    const post = useLoaderData()
    const { id, body } = post;
    return (
        <div className="border-2 w-96 p-3 rounded-xl text-center text-xl font-serif mx-auto border-purple-600 mt-6">
            <h3>ID: {id}</h3>
            <p className="mt-5">{body}</p>
            <Link to="/comments"><button className="bg-purple-600 p-3 rounded-xl font-medium mt-3 text-white">Exit</button></Link>
        </div>
    );
};

export default ShowDetails;