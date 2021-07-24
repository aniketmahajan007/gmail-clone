import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import LeftBar from "./components/LeftBar/LeftBar";
import EmailList from "./components/EmailList/EmailList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MailView from "./components/MailView/MailView";
import ComposeGui from "./components/ComposeGui/ComposeGui";
import {useSelector} from "react-redux";

function App() {

  const gmail = useSelector(state => state.gmail);
  return (
      <Router>
        <div className="App">
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
        </div>
      </Router>
  );
}

export default App;
