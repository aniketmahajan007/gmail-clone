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
import {useSelector} from "react-redux";
import {auth} from '../../firebase';
import {useDispatch} from "react-redux";
import {update_user_info} from "../../features/gmail/gmailSlice";

export default function Header(){
    const dispatch = useDispatch();
    const gmail = useSelector(state => state.gmail);
    const signout_redirect = () => {
        if(window.confirm('Sign Out ?')){
            auth.signOut().then(()=>{
                dispatch(update_user_info([]));
            })
        }
    };
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
                <Avatar onClick={signout_redirect} src={gmail.userdata[0].picture} alt="User" className="header_right_items user_avatar"/>
                <AppsIcon className="header_right_items" />
                <SettingsIcon className="header_right_items" />
                <HelpOutlineIcon className="header_right_items" />
            </div>
        </div>
    )
}