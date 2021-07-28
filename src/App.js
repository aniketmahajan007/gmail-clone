import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import LeftBar from "./components/LeftBar/LeftBar";
import EmailList from "./components/EmailList/EmailList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MailView from "./components/MailView/MailView";
import ComposeGui from "./components/ComposeGui/ComposeGui";
import {useSelector, useDispatch} from "react-redux";
import Login from "./components/Login/Login";
import {auth} from "./firebase";
import {update_user_info} from "./features/gmail/gmailSlice";

function App() {
  const dispatch = useDispatch();
  const gmail = useSelector(state => state.gmail);
  useEffect(()=>{
      auth.onAuthStateChanged(users => {
          console.log(users);
          if(users){
              const temp = [
                  {
                      name:users.displayName,
                      picture:users.photoURL
                  }
              ];
              console.log('App: ',temp);
              dispatch(update_user_info(temp));
          }
      });
  },[]);
  return (
      <Router>
        <div className="App">
          {
            gmail.userdata.length > 0  ?
                <div>
                  <Header/>
                  <div className="main_layout">
                    <LeftBar />
                    <Switch>
                      <Route path="/viewmail/:id">
                        <MailView/>
                      </Route>
                      <Route path="/">
                        {
                          gmail.compose_message_is_open && <ComposeGui/>
                        }
                        <EmailList/>
                      </Route>
                    </Switch>
                  </div>
                </div> :
                <Login/>
          }

        </div>
      </Router>
  );
}

export default App;
