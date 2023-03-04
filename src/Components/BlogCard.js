import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function BlogCard({ data }) {
  return (
    <Link to={`/blog/${data._id}`}>
      <div className="bg-white border rounded-md mb-4">
        <div>
          <img
            className="rounded-t-md"
            src={`http://localhost:10000/blog-images/${data.image}`}
          />
        </div>
        <div className="flex space-x-3 p-6">
          <div className="h-12 w-12">
            <img
              className="rounded-full"
              src={`http://localhost:10000/${data.user.image}`}
            />
          </div>
          <div className="space-y-1.5">
            <div className="leading-4">
              <h4>{data.user.firstName}</h4>
              <small className="text-gray-400">Jan 12</small>
            </div>
            <div>
              <h3 className="font-bold text-2xl hover:text-sky-600">
                {data.title}
              </h3>
            </div>
            <div className="flex items-center space-x-1.5">
              <FaRegComment size={15} className="text-gray-700" />
              <small className="text-gray-700">3 Comments</small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
