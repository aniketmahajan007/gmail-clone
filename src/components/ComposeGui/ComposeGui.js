import './ComposeGui.css';
import CloseIcon from '@material-ui/icons/Close';
import {Button, IconButton} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {compose_message_close} from "../../features/gmail/gmailSlice";
import {useForm} from 'react-hook-form';
import {db} from '../../firebase';
import firebase from "firebase";

export default function ComposeGui(){
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data) =>{
        db.collection("email").add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(compose_message_close());
    }
    return(
        <div className="ComposeGui">
            <div className="ComposeGui__header">
                <IconButton onClick={() => {dispatch(compose_message_close())}} className="ComposeGui_close_button">
                    <CloseIcon className="ComposeGui_close" />
                </IconButton>
                <span>New Message</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="ComposeGui__body">
                <input {...register("to",{required:true})} className="ComposeGui__body_input receipt" type="email" placeholder="Recipients" />
                <input {...register("subject",{required:true})} className="ComposeGui__body_input subject" type="text" placeholder="Subject" />
                <textarea {...register("message",{required:true})} name="message" rows={13} className="ComposeGui__body_input message" placeholder="Enter message..."/>
                <div className="ComposeGui__form">
                    {errors.to ? <span>Recipients is required</span> :
                        errors.subject ? <span>Subject is required</span> :
                            errors.message && <span>Message is required</span>
                    }
                </div>
                <div className="ComposeGui__send">
                    <Button type="submit" variant="contained" color="primary">
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}