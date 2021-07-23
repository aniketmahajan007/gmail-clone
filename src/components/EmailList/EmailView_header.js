import {IconButton} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import SettingsIcon from "@material-ui/icons/Settings";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function EmailView_header(){
    return(
        <div>
            <div className="EmailList__headerRight">
                <IconButton>
                    <ArrowBackIosIcon className="arrow" />
                </IconButton>
                <IconButton>
                    <ArrowForwardIosIcon className="arrow" />
                </IconButton>
                <IconButton>
                    <KeyboardIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </div>
            <div className="EmailList__headerLeft">
                <IconButton>
                    <CheckBoxOutlineBlankIcon className="CheckBoxOutlineBlankIcon" />
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RedoIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <br/>
        </div>
    )
}