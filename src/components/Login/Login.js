import './Login.css';
import Logo from '../../assest/logo.jpg';
import {Button} from "@material-ui/core";
import {useDispatch} from 'react-redux';
import {update_user_info} from "../../features/gmail/gmailSlice";
import {provider, auth} from "../../firebase";

export default function Login(){
    const dispatch = useDispatch();
    const login_direct = () => {
        auth.
        signInWithPopup(provider).
        then(result => {
                const temp = [{
                    name: result.additionalUserInfo.profile.name,
                    picture: result.additionalUserInfo.profile.picture
                }];
                dispatch(update_user_info(temp));
        }).catch(error => {
            alert(error.message);
            console.log(error);
        });
    }

    return(
        <div className="Login">
            <img src={Logo} className="Login__logo"  alt="Gmail"/>
            <Button onClick={login_direct} color="primary" variant="contained">Login to Gmail Clone</Button>
        </div>
    )
}