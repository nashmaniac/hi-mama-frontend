import logo from './logo.svg';
import './App.css';
import React from "react";
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import Nav from './modules/common/components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

class App extends React.Component{
    render() {
        return (
          <div className="container container-fluid">
            <NotificationContainer/>
            <React.StrictMode>
              <div style={{"marginTop": "2%"}}>
                <BrowserRouter>
                  <Nav/>
									<div style={{"marginTop": "2%"}}>
									<Switch >
										{routes.map(({path, component}, index) => {
											return <Route key={"route-"+index} component={component} path={path} exact/>;
										})}
                  </Switch>
									</div>
                  
                </BrowserRouter>
              </div>
            </React.StrictMode>
          </div>
        );
    }
}

export default App;
