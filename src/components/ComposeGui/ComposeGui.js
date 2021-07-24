import './ComposeGui.css';
import CloseIcon from '@material-ui/icons/Close';
import {Button, IconButton} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {compose_message_close} from "../../features/gmail/gmailSlice";

export default function ComposeGui(){
    const dispatch = useDispatch();

    return(
        <div className="ComposeGui">
            <div className="ComposeGui__header">
                <IconButton onClick={() => {dispatch(compose_message_close())}} className="ComposeGui_close_button">
                    <CloseIcon className="ComposeGui_close" />
                </IconButton>
                <span>New Message</span>
            </div>
            <form className="ComposeGui__body">
                <input className="ComposeGui__body_input receipt" type="text" placeholder="Recipients" />
                <input className="ComposeGui__body_input subject" type="text" placeholder="Subject" />
                <textarea rows={11} className="ComposeGui__body_input message" placeholder="Enter message..."/>
                <div className="ComposeGui__send">
                    <Button variant="contained" color="primary">
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}