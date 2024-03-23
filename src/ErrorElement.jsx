import { useNavigate } from "react-router-dom";

const ErrorElement = () => {
    const nevigate = useNavigate()
    const handleHomeBTn = () => {
        nevigate('/')
    }
    return (
        <div className=" flex justify-center items-center flex-col min-h-screen gap-5">
            <p className="text-7xl font-sans font-bold">404 Not Found !</p>
            <button onClick={handleHomeBTn} className="bg-purple-700 p-3 text-white font-bold rounded-xl font-serif px-5">Home</button>
        </div>
    );
};

export default ErrorElement;