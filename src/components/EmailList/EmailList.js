import './EmailList.css';
import MailView_header from "../MailView/MailView_header";
import Tab from "./Tab";
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRows from "./EmailRows";

export default function EmailList(){
    return (
        <div className="EmailList">
            <MailView_header/>
            <div className="MailTab">
                <Tab Icon={InboxIcon} title="Primary" tabcolor="tomato" selected={true} />
                <Tab Icon={PeopleIcon} title="Social" tabcolor="blue" selected={false} />
                <Tab Icon={LocalOfferIcon} title="Offers" tabcolor="green" selected={false} />
            </div>
            <EmailRows title="007aniketmahajan@gmailc.om" subject="Disposable Mail" description="ITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail mainITs a dummy mail main" datetime="24 Dec 10:00 A.M."  />
            <EmailRows title="007aniketmahajan@gmailc.om" subject="Disposable Mail" description="ITs a dummy mail main" datetime="24 Dec 10:00 A.M."  />
            <EmailRows title="007aniketmahajan@gmailc.om" subject="Disposable Mail" description="ITs a dummy mail main" datetime="24 Dec 10:00 A.M."  />
            <EmailRows title="007aniketmahajan@gmailc.om" subject="Disposable Mail" description="ITs a dummy mail main" datetime="24 Dec 10:00 A.M."  />
            <EmailRows title="007aniketmahajan@gmailc.om" subject="Disposable Mail" description="ITs a dummy mail main" datetime="24 Dec 10:00 A.M."  />
            <EmailRows title="007aniketmahajan@gmailc.om" subject="Disposable Mail" description="ITs a dummy mail main" datetime="24 Dec 10:00 A.M."  />
        </div>
    )
}