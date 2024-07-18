import { MoreVert } from "@mui/icons-material"
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/profile1.jpg" alt="" />
                    <span className="postUserName">Peter Oenga</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey this is my first post</span>
                <img className="postImage" src="/assets/profile1.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like.jpg" alt="" />
                    <img className="likeIcon" src="/assets/love.jpg" alt="" />
                    <span className="postLikeCounter">32 Likes</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 Commnents</span>
                </div>
            </div>
        </div>
    </div>
  )
}
