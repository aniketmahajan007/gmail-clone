import {Checkbox, IconButton} from "@material-ui/core";
import {LabelImportantOutlined, StarBorderOutlined} from "@material-ui/icons";
import {useHistory} from 'react-router-dom'

export default function EmailRows({id, subject, title, description, datetime}){
    const history = useHistory();

    return (
        <div onClick={() => history.push('/viewmail/10')} className="EmailRows">
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