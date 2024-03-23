import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();

    const { id, username, company, website, address } = user
    console.log(address);
    const nevigate=useNavigate()
    const handleBackBtn = () => {
        nevigate(-1)
    }

    return (
        <div className="text-xl font-serif border-4 border-purple-600 p-3 w-[380px] text-center rounded-2xl mt-5  mx-auto">
            <h3>ID: {id}</h3>
            <h3>User Name: {username}</h3>
            <h3>Company Name: {company.name}</h3>
            <h3>Website: {website}</h3>
            <h3>Address: {address.street},{address.city}</h3>
            <h3>Zip-Code: {address.zipcode.split('-')[0]}</h3>
            <button onClick={handleBackBtn} className="bg-purple-600 p-3 rounded-2xl text-white font-semibold mt-3">Go Back</button>
        </div>
    );
};

export default UserDetails;