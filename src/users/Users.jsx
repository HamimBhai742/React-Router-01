import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData()
    return (
        <div className="grid grid-cols-3 mt-7 gap-3 mx-auto max-w-[1170px]">
            {
                users.map((user, idx) => <User key={idx} user={user}></User>)
            }
        </div>
    );
};

export default Users;