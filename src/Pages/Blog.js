import "../index.css";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import BlogAuthor from "../Components/BlogAuthor";
import BlogContent from "../Components/BlogContent";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Blog() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:10000/blog/oneblog/${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setBlog(res.data.oneBlog);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (loading)
    return (
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  return (
    <div className="flex my-5 space-x-5">
      <BlogContent data={blog} user={blog.user} />
      <BlogAuthor user={blog.user} />
    </div>
  );
}

export default Blog;
