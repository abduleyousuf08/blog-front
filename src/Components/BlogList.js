import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function BlogList() {
  const token = localStorage.getItem("token");
  const [blogs, setBlogs] = useState([]);
  const [id, setId] = useState();
  const navigate = useNavigate();

  //fetching the user blogs endpoint
  useEffect(() => {
    axios
      .get("http://localhost:10000/blog/my", {
        headers: { Authorization: token },
      })
      .then((res) => setBlogs(res.data.findUser))
      .catch((e) => {
        console.log(e.response.message);
      });
  }, []);

  //fetching delete endpoint

  function fetchingDelete(id) {
    axios
      .delete(`http://localhost:10000/blog/deleteblog/${id}`)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }

  //
  return (
    <div className="mt-5">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-left h-10 text-sm">
            <th>Blog Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blogs) => (
            <tr className="border-y h-10">
              <td>
                {blogs.title} ({blogs.content})
              </td>

              <Link to={`/Edit/${blogs._id}`}>
                <button>
                  <CiEdit className="text-blue-800" />
                </button>
              </Link>

              <button onClick={() => fetchingDelete(blogs._id)}>
                <MdOutlineDelete className="text-red-500" />
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlogList;
