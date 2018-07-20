import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Route,
  NavLink,
  BrowserRouter,
  HashRouter,
  withRouter
} from "react-router-dom";
import { Helmet } from 'react-helmet';

import './App.css';
import PageHeader from './components/PageHeader';
import SubPageHeader from './components/SubPageHeader';
import flowData from './flowData.json';
import socialData from './socialData.json';
import TestPage from './components/testpage/TestPage';
import FlowRender from './components/FlowRender';

import { Tonoto, Template } from './components/subpages';

class App extends Component {

  constructor () {
    super()
  }

  componentWillMount() {
    document.title = 'ayh.io'
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Helmet>
            <meta charset='UTF-8' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed:300,400,500,600" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Barlow:300,400,500,600" rel="stylesheet" />
          </Helmet>
          <div class='allcontent'>
            <Route exact path='/' render={() => <PageHeader platformData={socialData} />} />
            <Route path='/testPage' render={() => <SubPageHeader subtitle="testPage" platformData={socialData} />} />
            <Route path='/tonoto' render={() => <SubPageHeader subtitle="tonoto" platformData={socialData} />} />
            
            <div class='s_body'>
              <Route 
                exact
                path='/' 
                render={() => <FlowRender flowData={flowData} />}
              />
              <Route path='/testPage' component={TestPage} />
              <Route path='/tonoto' component={Tonoto} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
