import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import GmailLogo from '../../assest/logo.jpg';
import {IconButton, Tooltip} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useSelector} from "react-redux";
import {auth} from '../../firebase';
import {useDispatch} from "react-redux";
import {update_user_info, update_leftbar} from "../../features/gmail/gmailSlice";

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
               <Tooltip title="Collapse">
                   <IconButton onClick={()=> {dispatch(update_leftbar())}}>
                       <MenuIcon/>
                   </IconButton>
               </Tooltip>
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
                <Tooltip title="Sign Out">
                    <Avatar onClick={signout_redirect} src={gmail.userdata[0].picture} alt="User" className="header_right_items user_avatar"/>
                </Tooltip>
                <Tooltip title="Menu">
                    <AppsIcon className="header_right_items" />
                </Tooltip>
                <Tooltip title="Account Setting">
                    <SettingsIcon className="header_right_items" />
                </Tooltip>
                <Tooltip title="Help">
                    <HelpOutlineIcon className="header_right_items" />
                </Tooltip>
            </div>
        </div>
    )
}