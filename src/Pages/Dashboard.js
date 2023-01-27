import { Link } from "react-router-dom"
import BlogList from "../Components/BlogList"

function Dashboard(){
    return(
    <div className="m-auto w-3/5">
        <div className="py-5">
            <h3 className="font-bold text-3xl">Dashboard</h3>
        </div>
        <div className="flex space-x-2 pb-4">
            <Link to="/profile" className="flex-1">
                <button className="w-full border border-blue-500 p-3 text-blue-500 rounded-md">Edit profile</button>
            </Link>
            <Link to="/change" className="flex-1">
                <button className="w-full  border border-blue-500 p-3 text-blue-500 rounded-md">Change password</button>
            </Link>
            <button className="flex-1 border border-blue-500 p-3 text-blue-500 rounded-md">Logout</button>
            
        </div>
        <div className="bg-white p-5 rounded-md">
            <h3 className="font-bold">Posts</h3>
            <BlogList/>
        </div>
    </div>
    )
}

export default Dashboard