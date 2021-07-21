import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import GmailLogo from '../../assest/logo.jpg';
import {IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'

export default function Header(){
    return(
        <div className="Header">
           <div className="Header_left">
               <IconButton>
                   <MenuIcon/>
               </IconButton>
               <img src={GmailLogo} alt="Logo" />
           </div>
            <div className="Header_center">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <input type="text" placeholder="Enter search text" />
                <ArrowDropDownIcon/>
            </div>
            <div className="Header_right">
                <Avatar alt="User" className="header_right_items user_avatar"/>
                <NotificationsIcon className="header_right_items" />
                <AppsIcon className="header_right_items" />
            </div>
        </div>
    )
}