import './LeftBar.css';
import AddIcon from '@material-ui/icons/Add';
import {Button, Icon, IconButton} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/Inbox';
import LeftItems from "./LeftItems";
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import DraftsIcon from '@material-ui/icons/Drafts';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import {useDispatch, useSelector} from "react-redux";
import {compose_message_open} from '../../features/gmail/gmailSlice';

export default function LeftBar(){
    const dispatch = useDispatch();

    return(
        <div className="LeftBar">
           <Button onClick={()=> {dispatch(compose_message_open())}} className="Compose" startIcon={<AddIcon/>}>Compose</Button>
            <br/><br/>
            <LeftItems Icon={InboxIcon} text="Inbox" total={10} selected={true}  />
            <LeftItems Icon={StarIcon} text="Starred" total={0} selected={false} />
            <LeftItems Icon={QueryBuilderIcon} text="Snoozed" selected={false} total={0} />
            <LeftItems Icon={LabelImportantIcon} text="Important" selected={false} total={0} />
            <LeftItems Icon={NearMeIcon} text="Sent" total={0} selected={false} />
            <LeftItems Icon={DraftsIcon} text="Draft" total={0} selected={false} />
            <LeftItems Icon={ArrowDropDownIcon} text="More" total={0} selected={false} />
            <div className="LeftBar__footer">
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>
            </div>
        </div>
    )
}