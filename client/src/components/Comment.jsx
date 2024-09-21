import React, { useState, useEffect } from "react";
import moment from "moment";
import { FaThumbsUp } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Comment({ comment, onLike }) {
  // Get user data using the userId from the comment object
  // Display the user's name and avatar in the comment section

  const [user, setUser] = useState({});
  const { currentUser } = useSelector((state) => state.user);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();

    // Check if the current user has liked the comment
    setIsLiked(comment.likes.includes(currentUser._id));
  }, [comment, currentUser]);

  useEffect(() => {
    // Re-render the component when the state changes
    console.log("render");
  }, [comment.numberOfLikes]);

  const handleLike = () => {
    console.log(comment.numberOfLikes);

    onLike(comment._id);
    setIsLiked(!isLiked); // Update isLiked state immediately
  };

  return (
    <div className="flex p-4 border-b dark:border-gray-600 text-sm">
      <div className="flex-shrink-0 mr-3">
        <img
          className="w-10 h-10 rounded-full bg-gray-200"
          src={user.profilePicture}
          alt={user.username}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <span className="font-bold mr-1 text-xs truncate cursor-pointer hover:text-blue-400">
            {user ? `@${user.username}` : "anonymous user"}
          </span>
          <span className="text-gray-500 text-xs cursor-default">
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        <p className="text-gray-500 mb-2 cursor-default">{comment.content}</p>
        <div className="flex items-center pt-2 text-xs border-t dark:border-gray-700 max-w-fit gap-2">
          <button
            className={`text-gray-400 hover:text-blue-500 ${isLiked && "!text-blue-500"}`}
            type="button"
            onClick={handleLike}
          >
            <FaThumbsUp className="text-sm" />
          </button>
          <p className="text-gray-500">
            {comment.numberOfLikes > 0 &&
              comment.numberOfLikes +
                " " +
                (comment.numberOfLikes === 1 ? "Like" : "Likes")}
          </p>
        </div>
      </div>
    </div>
  );
}
