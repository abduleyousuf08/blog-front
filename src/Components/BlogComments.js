import Comment from "./Comment";
import { UserContext } from "../Utils/UserContext";
import { useContext, useEffect } from "react";
import axios from "axios";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
//
function BlogComments() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [Comments, setComments] = useState([]);
  const [tokenV, setTokenV] = useState("");
  const [path, setPath] = useState("");

  const token = localStorage.getItem("token");
  //using useEffect to fetch the user's image
  useEffect(() => {
    axios
      .get("http://localhost:10000/auth/getUser", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setPath(`http://localhost:10000/${res.data.data.image}`);
      })
      .catch((e) => {
        console.log("from header", e);
      });
  }, []);

  //fetching the comments from database using useEffect
  useEffect(() => {
    axios
      .get(`http://localhost:10000/comments/getcomment/${id}`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setComments(res.data.getComment);
        setTokenV(res.data.tokenVerified);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  //handling onSubmit button to save the comment
  function handleOnSubmit() {
    axios
      .post(
        "http://localhost:10000/comments/createcomment",
        {
          comment: comment,
          blog: id,
        },
        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        toast.success("posted comment");
      })
      .catch((e) => {
        toast.error("SNAP !! ");
        console.log(e);
      });
  }

  return (
    <div className="border-t py-5 px-16">
      <h1 className="font-bold text-2xl">Top comment(s)</h1>

      {user && (
        <div className="py-5">
          <div className="flex space-x-2">
            <div className="h-12 w-12">
              <img className="rounded-full" src={path} />
            </div>

            <textarea
              className="border w-full rounded-md p-2"
              placeholder="Add to the discussion"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 p-2" onClick={handleOnSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}

      {Comments.map((comment) => (
        <Comment data={comment} token={tokenV} />
      ))}
    </div>
  );
}

export default BlogComments;
