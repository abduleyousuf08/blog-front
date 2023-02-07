import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import BlogAuthor from "../Components/BlogAuthor";
import BlogContent from "../Components/BlogContent";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Blog() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:10000/blog/oneblog/${id}`)
      .then((res) => {
        setBlog(res.data.oneBlog);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="flex my-5 space-x-5">
      <BlogContent data={blog} />
      <BlogAuthor user={blog.user} />
    </div>
  );
}

export default Blog;
