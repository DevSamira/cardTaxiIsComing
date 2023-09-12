import Trash from "../imgs/trash.png";

const MessagesSent = ({ comment }: any) => {
  return (
    <div className="messages">
      <img className="person" src={comment.profilePic} />
      <p>{comment.text}</p>
      <img className="trash" src={Trash} />
    </div>
  );
};

export default MessagesSent;
