import "./post.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [poke, setPoke] = useState(post.poke);
  const [isPoked, setIsPoked] = useState(false);
console.log(post)
  const pokeHandler = () => {
    setPoke(isPoked ? poke - 1 : poke + 1);
    setIsPoked(!isPoked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <img className="postProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} /> */}
            <span className="postUsername">{post.user.name || post.user.username}</span>
            <span className="postDate">{post.created_at}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.content}</span>
          <img className="postImg" src={post.imgurl} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="pokeIcon"
              src="/assets/post/poke1.png"
              onClick={pokeHandler}
            />
            <span className="pokeCounter">{poke} people poked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
