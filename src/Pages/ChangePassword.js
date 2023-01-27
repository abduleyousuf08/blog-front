function ChangePassword(){
    return(
        <div className="m-auto w-1/2 mt-5 p-5 bg-white rounded-md">
        <h2 className="mb-8 text-center font-bold text-2xl">Change Password</h2>
        <p className="text-gray-500 pb-4">Make sure your new password is a strong password. Do mix letters and special characters</p>
        <div className="my-2 space-y-2">
            <span>Enter old password</span>
            <input className="w-full border p-2 rounded-md" type="text" />
        </div>
        <div className="my-2 space-y-2">
            <span>Enter new password</span>
            <input className="w-full border p-2 rounded-md" type="text" />
        </div>
        <div className="my-2 space-y-2">
            <span>Confirm new password</span>
            <input className="w-full border p-2 rounded-md" type="text"  />
        </div>
        <div className="flex justify-center mt-5">
             <button className="px-5 py-2.5 bg-blue-500 text-white rounded-md">Change Password</button>
        </div>
    </div>
    )
}

export default ChangePassword