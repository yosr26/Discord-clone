import '../App.css'
import Logout from '../assets/Logout.png'
import siteLogo from '../assets/siteLogo2.png'

export default function SideBar(){
    return(<div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={siteLogo} alt="logo" width="30"/>
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon2__inner'>
                <img src={Logout} alt="logout" width="30"/>
            </div>

        </div>
    </div>)
    
}