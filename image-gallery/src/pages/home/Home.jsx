import "./Home.css";
import Topbar from "../../components/Topbar/Topbar.jsx";
import Rightbar from '../../components/rightbar/Rightbar.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Leftbar from '../../components/leftbar/Leftbar.jsx';


export default function Home() {
  return (
    <>
    <Topbar/>
    <div className='homeContainer'>
      
      <Sidebar/>
      <Leftbar/>
      <Rightbar/>
      
      </div>
    </>
    
    
  )
}
