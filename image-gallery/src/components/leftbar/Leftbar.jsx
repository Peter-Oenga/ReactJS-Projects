import "./leftbar.css";
import Share from  "../../components/share/Share.jsx";
import Post from  "../../components/post/Post.jsx";
import { Posts } from  "../../dummyData";

export default function Leftbar() {
  return (
    <div className="leftbar">
        <div className="feedWrapper">
          <Share/>
          {Posts.map((p) => (
            <Post key={p.id} post={p}/>
          ))}
        </div>
    </div>
  );
}



        