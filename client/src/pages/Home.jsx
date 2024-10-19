import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchposts = async () => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchposts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-24 px-3 max-w-6xl mx-auto  ">
        <h1 className="text-3xl font-bold lg:text-6xl ">Welcome to my Blog </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you will find a variety of article about various topics such as
          programming, technology, and personal growth.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 ">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6 ">
            <h2 className="text-2xl text-center font-semibold">Recent Posts</h2>
            <div className="flex flex-wrap gap-4 ">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View All{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
