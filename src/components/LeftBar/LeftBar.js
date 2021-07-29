import './LeftBar.css';
import AddIcon from '@material-ui/icons/Add';
import {Button, IconButton} from "@material-ui/core";
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
import ChatIcon from '@material-ui/icons/Chat';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import {useDispatch, useSelector} from "react-redux";
import {compose_message_open} from '../../features/gmail/gmailSlice';
import {useState} from "react";

export default function LeftBar(){
    const dispatch = useDispatch();
    const gmail = useSelector(state => state.gmail);
    const [more_collapse, more_collapse_update] = useState(false);
    return(
        <div className={gmail.leftbar_collapse ? "LeftBar leftBar__Collapse" : "LeftBar"}>
           <Button onClick={()=> {dispatch(compose_message_open())}} className="Compose" startIcon={<AddIcon/>}>Compose</Button>
            <br/><br/>
            <LeftItems Icon={InboxIcon} text="Inbox" total={10} selected={true}  />
            <LeftItems Icon={StarIcon} text="Starred" total={0} selected={false} />
            <LeftItems Icon={QueryBuilderIcon} text="Snoozed" selected={false} total={0} />
            <LeftItems Icon={LabelImportantIcon} text="Important" selected={false} total={0} />
            <LeftItems Icon={NearMeIcon} text="Sent" total={0} selected={false} />
            <LeftItems Icon={DraftsIcon} text="Draft" total={0} selected={false} />
            {!more_collapse && <div onClick={() => {more_collapse_update(true)}}><LeftItems Icon={ArrowDropDownIcon} text="More" total={0} selected={false} /></div>}
            {
                more_collapse &&
                    <div>
                        <div onClick={()=>{more_collapse_update(false)}}><LeftItems action_bar={more_collapse_update} Icon={ArrowDropUpIcon} text="Less" total={0} selected={false} /></div>
                        <LeftItems Icon={ChatIcon} text="Chats" total={0} selected={false} />
                        <LeftItems Icon={CancelScheduleSendIcon} text="Schedule" total={0} selected={false} />
                        <LeftItems Icon={DeleteIcon} text="Trash" total={0} selected={false} />
                        <LeftItems Icon={SettingsIcon} text="Mange Label" total={0} selected={false} />
                    </div>
            }
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