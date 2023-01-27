import { Link } from "react-router-dom"

function SideBar(){
    return(
        <div className=" h-fit basis-1/5 ">
                <div className="bg-white rounded-md border px-5 pt-2 pb-8">
                    <h2 className="font-bold text-xl">DEV community 👨‍💻👩‍💻 is a community of 988,949 amazing developers</h2>
                    <p className="py-2">We're a place where coders share, stay up-to-date and grow their careers. </p>
                    <div className="flex flex-col justify-center space-y-3">
                      <Link to="/signup">
                        <button className="border w-full border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">Create Account</button>
                      </Link>
                      <Link to="/login">
                        <button className="mr-3 w-full">Log in</button> 
                      </Link>  
                    </div>      
                </div>
                <div className="py-5 space-y-1.5">
                    <div className="flex items-center">
                        <div className="w-6">🏠</div>
                        <h3 className="text-sm">Home</h3>
                    </div>
                    <div className="flex items-center">
                        <div className="w-6">📃</div>
                        <h3 className="text-sm">Listings</h3>
                    </div>
                    <div className="flex items-center">
                        <div className="w-6">🎙</div>
                        <h3 className="text-sm">Podcast</h3>
                    </div>
                    <div className="flex items-center">
                        <div className="w-6">📽</div>
                        <h3 className="text-sm">Videos</h3>
                    </div>
                    <div className="flex items-center">
                        <div className="w-6">💡</div>
                        <h3 className="text-sm">FAQ</h3>
                    </div>
                    <div className="flex items-center">
                        <div className="w-6">❤</div>
                        <h3 className="text-sm">Sponsers</h3>
                    </div>
                </div>
            </div>
    )
}

export default SideBar