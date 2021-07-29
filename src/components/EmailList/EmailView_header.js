import {IconButton, Tooltip} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import SettingsIcon from "@material-ui/icons/Settings";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {useState} from "react";

export default function EmailView_header(){
    return(
        <div>
            <div className="EmailList__headerRight">
                <Tooltip title="Newer">
                    <IconButton>
                        <ArrowBackIosIcon className="arrow EmailList__arrowOlder" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Older">
                    <IconButton>
                        <ArrowForwardIosIcon className="arrow EmailList__arrowNew" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Keyboard">
                    <IconButton>
                        <KeyboardIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Setting">
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </Tooltip>
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