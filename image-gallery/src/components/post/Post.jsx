import { MoreVert } from "@mui/icons-material"
import "./post.css"
import { Users } from  "../../dummyData";
import { useState } from "react";

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () =>{
        setLike(isLiked ? like -1: like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/profile1.jpg" alt="" />
                    <span className="postUserName">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImage" src="/assets/profile1.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like.jpg" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="/assets/love.jpg" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} Likes</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment}Commnents</span>
                </div>
            </div>
        </div>
    </div>
  )
}
