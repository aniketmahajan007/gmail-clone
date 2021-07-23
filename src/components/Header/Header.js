import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import GmailLogo from '../../assest/logo.jpg';
import {IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

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
                <AppsIcon className="header_right_items" />
                <SettingsIcon className="header_right_items" />
                <HelpOutlineIcon className="header_right_items" />
            </div>
        </div>
    )
}