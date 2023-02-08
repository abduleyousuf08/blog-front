import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Edit() {
  //function handling the edit posts
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  //fetching data from edit blog
  function handleOnEdit() {
    axios
      .put(`http://localhost:10000/blog/editblog/${id}`, inputs)
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
      <input type="file" />
      <div className="my-2">
        <input
          className="text-4xl font-bold w-full"
          type="text"
          placeholder="New post title here..."
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />
      </div>
      <div className="border border-gray-100 my-3"></div>

      <textarea
        className="border w-full rounded-md p-2 my-2"
        rows="10"
        placeholder="Blog content"
        onChange={(e) => setInputs({ ...inputs, content: e.target.value })}
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
