import "../index.css";
import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { UserContext } from "../Utils/UserContext";
import { toast } from "react-toastify";
import { useContext } from "react";
import axios from "axios";

function Comment({ data, token, image }) {
  const userId = data.user._id;
  const commentId = data._id;
  const { user } = useContext(UserContext);
  //fetchingDeleteComment
  function fetchingDeletComment() {
    axios
      .delete(`http://localhost:10000/comments/deletecomment/${commentId}`)
      .then((res) => {
        toast.success("Deleted Comment");
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }
  return (
    <div className="py-5">
      <div className="flex space-x-2">
        <div className="">
          <img
            className="h-12 w-12 rounded-full"
            // src={`http://localhost:10000/${image}`}
            src="https://www.shutterstock.com/image-photo/close-headshot-portrait-picture-smiling-600w-1733598437.jpg"
          />
        </div>
        <div className="border w-full rounded-md p-3">
          <div className="flex items-center space-x-1">
            <h2>
              {data.user.firstName} {data.user.lastName}
            </h2>
            <h2 className="text-gray-500">12 Jan</h2>
          </div>

          <p className="text-lg py-2">
            {/**if user'sID which comment posted is equal to the token which is logged in then delete icon visible */}
            {data.comment}

            {userId == token && (
              <button className="cursor-pointer" onClick={fetchingDeletComment}>
                <AiTwotoneDelete />
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
