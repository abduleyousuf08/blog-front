import {MdSearch} from "react-icons/md"
import {Link} from "react-router-dom"

function Header(){
    return (
        <div className="flex justify-between bg-white py-4 px-20  border-b-2">
            <div className="flex items-center">
                <Link to="/">
                    <img className="h-9" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"/>
                </Link>
                <div className="ml-3 flex items-center border-2 px-2 rounded-md">
                    <input className="p-1.5 w-72" type="text" placeholder="Search"/>
                    <MdSearch size={25}/>
                </div>
            </div>
            {/* WHEN USERS NOT LOGGED IN */}
            {/* <div>
                <Link to="/login">
                <button className="mr-3">Log in</button>
                </Link>
                <Link to="/signup">
                <button className="border border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">Create Account</button>
                </Link>
            </div> */}
            {/* WHEN USERS NOT LOGGED IN */}

            {/* WHEN USER IS LOGGED IN */}
            <div className="flex items-center">
                <Link to="/new">
                <button className="border border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">Post Blog</button>
                </Link>
                <Link to="/dashboard">
                <div className="h-10 w-10 ml-4">               
                     <img className="rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
                </div>
                </Link>
            </div>
            {/* WHEN USER IS LOGGED IN */}
        </div>
    )
}

export default Header