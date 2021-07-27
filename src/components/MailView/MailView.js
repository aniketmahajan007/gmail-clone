import './MailView.css';
import MailView_header from "./MailView_header";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useSelector} from "react-redux";

export default function MailView(){

    const gmail = useSelector(state => state.gmail);

    return(
        <div className="MailView">
            <MailView_header/>
            <div className="MailView__body">
                <div className="MailView__content">
                    <h2>{gmail.message_selected.subject}</h2>
                    <div>
                        <span className="MailView__timeinfo">{gmail.message_selected.datetime}</span>
                        <Avatar className="MailView__Avatar" />
                        <div className="MailView__senderinfo">
                            <h5>{gmail.message_selected.to}</h5>
                            <span>to me <ArrowDropDownIcon className="MailView__senderinfo__arrow_down" /></span>
                        </div>
                    </div>
                    <br/>
                    <p>{gmail.message_selected.description}</p>
                </div>
            </div>
        </div>
    )
}