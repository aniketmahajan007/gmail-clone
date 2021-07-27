import {IconButton} from "@material-ui/core";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {MoveToInbox} from "@material-ui/icons";
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {if_message_deselect} from "../../features/gmail/gmailSlice";

export default function MailView_header(){
    const history = useHistory()
    const dispatch = useDispatch();
    const back_to_email_list = () =>{
        dispatch(if_message_deselect());
        history.push('/');
    }

    return(
        <div className="MailView_header">
            <IconButton onClick={back_to_email_list}>
                <KeyboardBackspaceIcon/>
            </IconButton>
            <IconButton>
                <MoveToInbox/>
            </IconButton>
            <IconButton>
                <ReportIcon/>
            </IconButton>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
            <IconButton>
                <EmailIcon/>
            </IconButton>
            <IconButton>
                <QueryBuilderIcon/>
            </IconButton>
            <IconButton>
                <CheckCircleIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </div>
    )
}