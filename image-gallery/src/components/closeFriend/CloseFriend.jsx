import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <div>
         <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="/assets/profile1.jpg" alt="" />
              <span className="sidebarFriendName">{ user.username }</span>
         </li>
    </div>
  )
}
