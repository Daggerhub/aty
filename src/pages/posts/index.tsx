import Button from "../../components/button";
import Paper from "../../components/paper";
import { FaRegCommentDots as CommentIcon } from "react-icons/fa";
import { postMock } from "./constants";
import PostItem from "./components/postItems";
import Login from "../auth/components/login";
import { useState } from "react";
import AuthPage from "../auth";

function Posts() {
  const [show, setShow] = useState(false);
  const handlePostButtonClick = () => {
    setShow(true);
  };

  return (
    <div className="flex justify-start items-center flex-col w-full gap-8 p-8">
      <div className="w-[700px]">
        <h1 className="text-4xl font-medium text-white mb-2">Hello Jane</h1>
        <p className="text-base">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
      </div>
      <div className="w-[700px]">
        <Paper>
          <div className="p-4">
            <div className=" text-primary mb-2">Create Post</div>
            <div className="flex gap-4 bg-base-900 p-4 rounded-md">
              <div className="p-3 rounded-full bg-base-300">
                <CommentIcon className=" text-white" />
              </div>
              <input
                type="text"
                placeholder="What's on your mind?"
                className=" bg-inherit border-none w-full focus:outline-none text-white"
              />
            </div>
            <div className="flex justify-end">
              <Button
                text="Post"
                size="lg"
                type="primary"
                styles="mt-4"
                onClick={handlePostButtonClick}
              />
            </div>
          </div>
        </Paper>
      </div>

      <div className="w-[700px] flex flex-col gap-4">
        {postMock.map((post, index) => {
          return (
            <PostItem
              key={index}
              userName={post.username}
              userAvatar={post.avtaarSrc}
              postTime={post.time}
              postContent={post.text}
              onMoreClick={() => {}}
            />
          );
        })}
      </div>
      {show && (
        <AuthPage isCollapsable={true} onCollapse={() => setShow(false)} />
      )}
    </div>
  );
}

export default Posts;
