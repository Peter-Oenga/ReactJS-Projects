import "./leftbar.css";
import Share from  "../../components/share/Share.jsx";
import Post from  "../../components/post/Post.jsx";

export default function Leftbar() {
  return (
    <div className="leftbar">
        <div className="feedWrapper">
          <Share/>
          <Post/>
        </div>
    </div>
  )
}
