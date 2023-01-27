function New(){
    return(
        <div className="m-auto w-1/2 mt-5 p-5 bg-white rounded-md">
            <h2 className="mb-8 text-center font-bold text-2xl">Blog post</h2>
            <input type="file"/>
            <div className="my-2">
                <input className="text-4xl font-bold w-full" type="text" placeholder="New post title here..." />
            </div>
            <div className="border border-gray-100 my-3"></div>
           
            <textarea className="border w-full rounded-md p-2 my-2" rows="10" placeholder="Blog content"></textarea>
            <div className="flex justify-end ">
                 <button className="px-6 py-2 bg-blue-500 text-white rounded-md">Post</button>
            </div>
        </div>
    )
}

export default New