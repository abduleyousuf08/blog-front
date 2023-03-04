import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//function handling the new posts
function New() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [newImage, setNewImage] = useState("");
  const navigate = useNavigate();

  // a function will handle the new posts
  function handleOnPost() {
    //forming data to sent the backend
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("newImage", newImage);
    const token = localStorage.getItem("token");

    axios
      .post("http://localhost:10000/blog/createblog", formData, {
        headers: { Authorization: token },
        ContentType: "multipart/form-data",
      })
      .then(() => {
        toast.success("Blog posted");
        navigate("/");
      })
      .catch((e) => {
        // toast.error(e.response.data.message);
        console.log(e);
      });
  }

  return (
    <div className="m-auto w-1/2 mt-5 p-5 bg-white rounded-md">
      <h2 className="mb-8 text-center font-bold text-2xl">Blog post</h2>
      <input type="file" onChange={(e) => setNewImage(e.target.files[0])} />
      <div className="my-2">
        <input
          className="text-4xl font-bold w-full"
          type="text"
          placeholder="New post title here..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="border border-gray-100 my-3"></div>

      <textarea
        className="border w-full rounded-md p-2 my-2"
        rows="10"
        placeholder="Blog content"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="flex justify-end ">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleOnPost}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default New;
