function Profile(){
    return (
    <div className="m-auto w-1/2 mt-5 p-5 bg-white rounded-md">
        <h2 className="mb-8 text-center font-bold text-2xl">Edit profile</h2>
        <p className="text-gray-500 pb-4">Make sure your new password is a strong password. Do mix letters and special characters</p>
        <div className="my-2 space-y-2">
            <span>First Name</span>
            <input className="w-full border p-2 rounded-md" type="text" />
        </div>
        <div className="my-2 space-y-2">
            <span>Second Name</span>
            <input className="w-full border p-2 rounded-md" type="text" />
        </div>
        <div className="my-2 space-y-2">
            <span>Location</span>
            <input className="w-full border p-2 rounded-md" type="text"  />
        </div>
        <div className="my-2 space-y-2">
            <span>Bio</span>
            <textarea className="border w-full rounded-md p-2" placeholder="Bio."></textarea>
        </div>
        <div className="mt-4">
            <input type="file"/>
        </div>
        <div className="flex justify-center mt-5">
             <button className="px-5 py-2.5 bg-blue-500 text-white rounded-md">Save</button>
        </div>
    </div>
    )
}

export default Profile