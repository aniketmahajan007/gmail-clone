import './LeftBar.css';
import AddIcon from '@material-ui/icons/Add';
import {Button} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/Inbox';
import LeftItems from "./LeftItems";
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import DraftsIcon from '@material-ui/icons/Drafts';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function LeftBar(){
    return(
        <div className="LeftBar">
           <Button className="Compose" startIcon={<AddIcon/>}>Compose</Button>
            <br/><br/>
            <LeftItems Icon={InboxIcon} text="Inbox" total={10} selected={true}  />
            <LeftItems Icon={StarIcon} text="Starred" total={0} selected={false} />
            <LeftItems Icon={QueryBuilderIcon} text="Snoozed" selected={false} total={0} />
            <LeftItems Icon={LabelImportantIcon} text="Important" selected={false} total={0} />
            <LeftItems Icon={NearMeIcon} text="Sent" total={0} selected={false} />
            <LeftItems Icon={DraftsIcon} text="Draft" total={0} selected={false} />
            <LeftItems Icon={ArrowDropDownIcon} text="More" total={0} selected={false} />
        </div>
    )
}