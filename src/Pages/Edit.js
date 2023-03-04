import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Edit() {
  //function handling the edit posts
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:10000/blog/oneblog/${id}`)
      .then((res) => {
        setTitle(res.data.oneBlog.title);
        setContent(res.data.oneBlog.content);
      })
      .catch((e) => {
        toast.error("something is wrong please refresh or check your internet");
      });
  }, []);

  //fetching data from edit blog
  function handleOnEdit() {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("newImage", image);

    axios
      .put(`http://localhost:10000/blog/editblog/${id}`, formData)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }
  return (
    <div className="m-auto w-1/2 mt-5 p-5 bg-white rounded-md">
      <h2 className="mb-8 text-center font-bold text-2xl">Edit post</h2>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <div className="my-2">
        <input
          className="text-4xl font-bold w-full"
          type="text"
          placeholder="New post title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="border border-gray-100 my-3"></div>

      <textarea
        className="border w-full rounded-md p-2 my-2"
        rows="10"
        placeholder="Blog content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="flex justify-end ">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleOnEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Edit;
