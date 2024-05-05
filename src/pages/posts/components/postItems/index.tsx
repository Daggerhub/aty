import Paper from "../../../../components/paper";
import { FaRegCommentDots as CommentIcon } from "react-icons/fa";
import { BsThreeDots as MoreIcon } from "react-icons/bs";

type PostItemProps = {
  userName: string;
  userAvatar: string;
  postTime: string;
  postContent: string;
  onMoreClick: () => void;
};
const PostItem = ({
  userName,
  userAvatar,
  postTime,
  postContent,
  onMoreClick,
}: PostItemProps) => {
  return (
    <Paper>
      <div className="flex justify-between mb-3">
        <div className="flex">
          <img
            src={userAvatar}
            alt="post"
            className="object-cover w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <div className="text-white font-semibold">{userName}</div>
            <div className=" text-primary text-sm">{postTime}</div>
          </div>
        </div>
        <MoreIcon className="text-white" onClick={onMoreClick} />
      </div>
      <div className="flex gap-4 bg-base-900 p-4 rounded-md">
        <div className="p-3 rounded-full bg-base-300 h-max">
          <CommentIcon className="text-white" />
        </div>
        <p className="text-[#7F8084]">{postContent}</p>
      </div>
    </Paper>
  );
};

export default PostItem;
