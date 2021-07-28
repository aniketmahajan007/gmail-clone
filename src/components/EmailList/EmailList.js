import './EmailList.css';
import EmailView_header from "./EmailView_header";
import Tab from "./Tab";
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRows from "./EmailRows";
import {useEffect, useState} from "react";
import {db} from '../../firebase';
import formatDate from "../../formatDate";

export default function EmailList(){
    const [emails, setemails] = useState([]);
    useEffect(()=>{
            db.collection('email')
                .orderBy('timestamp','desc')
                .onSnapshot(snapshot => {
                        setemails(snapshot.docs.map((docs) => {
                                return {
                                        id: docs.id,
                                        data: docs.data()
                                }}
                        ));
                });
    },[]);
    return (
        <div className="EmailList">
            <EmailView_header/>
            <div className="MailTab">
                <Tab Icon={InboxIcon} title="Primary" tabcolor="tomato" selected={true} />
                <Tab Icon={PeopleIcon} title="Social" tabcolor="blue" selected={false} />
                <Tab Icon={LocalOfferIcon} title="Offers" tabcolor="green" selected={false} />
            </div>
                {
                        emails?.map(emails => {
                                const time = new Date(emails.data.timestamp?.seconds * 1000);
                                return (
                                    <EmailRows key={emails.id} id={emails.id} to={emails.data.to} subject={emails.data.subject} description={emails.data.message} datetime={formatDate(time)} />
                                )
                        })
                }
        </div>
    )
}