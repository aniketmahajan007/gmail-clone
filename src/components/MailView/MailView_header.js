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

export default function MailView_header(){
    const history = useHistory()

    return(
        <div className="MailView_header">
            <IconButton onClick={()=> history.push('/')}>
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