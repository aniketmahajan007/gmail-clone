import './MailView.css';
import MailView_header from "./MailView_header";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function MailView(){
    return(
        <div className="MailView">
            <MailView_header/>
            <div className="MailView__body">
                <div className="MailView__content">
                    <h2>Subject</h2>
                    <div>
                        <Avatar className="MailView__Avatar" />
                        <div className="MailView__senderinfo">
                            <h5>007aniketmahajan@gmail.com</h5>
                            <span>to me <ArrowDropDownIcon className="MailView__senderinfo__arrow_down" /></span>
                        </div>
                        <span className="MailView__timeinfo">10:30 P.M.</span>
                    </div>
                    <br/>
                    <p>Message</p>
                </div>
            </div>
        </div>
    )
}