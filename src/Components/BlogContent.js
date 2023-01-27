import BlogComments from "./BlogComments"

function BlogContent(){
    return(
        <div className="flex-1">
        <div className="bg-white rounded-md">
            <div>
                <img className="rounded-t-md" src="https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/"/>
            </div>
            <div className="py-5 px-16">
            <div className="flex items-center space-x-3 py-3">
                <div className="h-12 w-12">               
                     <img className="rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
                </div>
            <div className="leading-4">
                <h4>Mohamed ahmed</h4>
                <small className="text-gray-400">Jan 12</small>
            </div>
            </div>
            <h3 className="font-bold text-5xl hover:text-sky-600">This is my first blog about APIs and requests and responses</h3>
            <div className="py-10">
                This is a blog about this and that
            </div>
            </div>
            <BlogComments/>
        </div>
    </div>
    )
}

export default BlogContent