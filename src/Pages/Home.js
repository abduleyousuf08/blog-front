import "../index.css";
import BlogCard from "../Components/BlogCard";
import SideBar from "../Components/SideBar";
import ListCard from "../Components/ListCard";
import { toast } from "react-toastify";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:10000/blog/bloglist")
      .then((res) => {
        setBlogs(res.data.bloged);
        setLoading(false);
      })
      .catch((e) => {
        toast.error("please reload");
      });
  });

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
    <div className="flex justify-between space-x-5 mt-5">
      <SideBar />
      <div className="flex-1">
        {blogs.map((blog) => (
          <BlogCard data={blog} />
        ))}
      </div>
      <div className="basis-1/4">
        <div className="bg-slate-50 py-2 rounded-md">
          <div className="flex justify-between items-center px-5 py-2">
            <h3 className="font-bold">Listings</h3>
            <small className="text-blue-700 font-semibold">See all</small>
          </div>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
