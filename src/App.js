import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import LeftBar from "./components/LeftBar/LeftBar";
import EmailList from "./components/EmailList/EmailList";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MailView from "./components/MailView/MailView";

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <div className="main_layout">
            <LeftBar />
            <Switch>
              <Route path="/viewmail">
                <MailView/>
              </Route>
              <Route path="/">
                <EmailList/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
