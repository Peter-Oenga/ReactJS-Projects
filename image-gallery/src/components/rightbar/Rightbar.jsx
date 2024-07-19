import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from "../../components/online/Online.jsx";

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImg" src="/assets/profile1.jpg" alt="" />
            <span className="birthdayText">
              <b>John Doe</b> and <b>3 other friends</b> have birthdays today
            </span>
          </div>
          <img className="birthdayAd" src="/assets/Kilimall.jpg" alt="" />
          <h4 className="rightBarTitle">Online Friends</h4>
          <ul className="rightbarFriendsList">
            
            {Users.map(u=>(
              <Online key={u.id} user = {u} />
            ))}
          </ul>
        </div>
    </div>
  )
}
