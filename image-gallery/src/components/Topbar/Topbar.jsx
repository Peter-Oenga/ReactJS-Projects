import "./Topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="Logo">Lamasocial</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search for friend, post or video" className="searchinput" />
          </div>
          
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbariconItem">
              <Person/>
              <span className="topbariconBadge">1</span>
            </div>
            <div className="topbariconItem">
              <Chat/>
              <span className="topbariconBadge">1</span>
            </div>
            <div className="topbariconItem">
              <Notifications/>
              <span className="topbariconBadge">1</span>
            </div>

            <img src="/assets/profile1.jpg" alt="" className="topbarimg" />
          </div>
        </div>
    </div>
  )
}
