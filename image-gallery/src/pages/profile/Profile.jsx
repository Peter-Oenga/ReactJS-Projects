import "./profile.css"
import Topbar from "../../components/Topbar/Topbar.jsx";
import Rightbar from '../../components/rightbar/Rightbar.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Leftbar from '../../components/leftbar/Leftbar.jsx';

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className='profile'>
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">                   
                    <img className="profileCoverImg" src="/assets/profile1.jpg" alt="" />
                    <img className="profileUserImg" src="/assets/profile1.jpg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Peter Oenga</h4>
                    <span className="profileDesc">Hello Aliens!</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Leftbar/>
            <Rightbar/>
            </div>
        </div>
      </div>
    </>
  )
}
