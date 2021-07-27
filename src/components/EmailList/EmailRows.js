import {Checkbox, IconButton} from "@material-ui/core";
import {LabelImportantOutlined, StarBorderOutlined} from "@material-ui/icons";
import {useHistory} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {if_message_select} from '../../features/gmail/gmailSlice';

export default function EmailRows({id,to, subject, description, datetime}){
    const history = useHistory();
    const dispatch = useDispatch();

    const email_is_clicked = () => {
        dispatch(if_message_select({id, to, subject, description, datetime}));
        history.push('/viewmail/'+id)
    }

    return (
        <div onClick={email_is_clicked} className="EmailRows">
            <div className="EmailRows__options">
                <Checkbox className="Checkbox" />
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </div>
            <div className="EmailRows__description">
                <h4>{subject}</h4>
                <span>{description}</span>
            </div>
            <div className="EmailRows__time">
                <h4>{datetime}</h4>
            </div>
        </div>
    )
}