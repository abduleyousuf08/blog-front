import {FaRegHeart,FaRegComment,FaRegBookmark} from "react-icons/fa"
import BlogAuthor from "../Components/BlogAuthor"
import BlogContent from "../Components/BlogContent"

function Blog(){
    return (
        <div className="flex my-5 space-x-5">
          <BlogContent/>
          <BlogAuthor/>
        </div>
    )
}

export default Blog