import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
    const {name,email,address,phone,id} = user;
    console.log(name.slice(0,12));

    const nevigate=useNavigate()
    
    const handleUserBtn=()=>{
        nevigate(`/user/${id}`)
    }

    return (
        <div className="border-4 border-purple-600 rounded-xl p-5 text-xl font-tt">
           <h3>Name: {name.slice(0,12)}</h3>
           <small>E-mail: {email}</small>
           <h3>Phone: {phone.split(' ')[0]}</h3>
           <h3>City: {address.city}</h3>
           <h3>Street: {address.street}</h3>
           <h3>Zip-Code: {address.zipcode}</h3>
           <button onClick={handleUserBtn} className="bg-purple-700 p-3 rounded-xl text-white mt-3">Show Details</button>
        </div>
    );
};

export default User;