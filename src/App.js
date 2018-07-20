import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlowCat from './components/FlowCat';
import PageHeader from './components/PageHeader';
import flowData from './flowData.json';
import socialData from './socialData.json';
import { Helmet } from 'react-helmet';

class App extends Component {

  constructor () {
    super()
  }

  componentWillMount() {
    document.title = 'ayh.io'
  }

  renderSubtitle(label) {
    if(label) {
      return <p class='title_m t_stitle'>{label}</p>
    }
    return;
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charset='UTF-8' />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed:300,400,500,600" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Barlow:300,400,500,600" rel="stylesheet" />
        </Helmet>
        <div class='allcontent'>
          <PageHeader platformData={socialData}/>
          <div class='s_body'>

            {flowData.sections.map(cat => {
              return(
                <div class='s_body_row'>
                {this.renderSubtitle(cat.label)}
                  <div class='s_row_title'>
                    <p class='t_vertical t_stitle'>{cat.label}</p>
                  </div>
                  <FlowCat itemList={cat.items} />
                </div>
              )
            })}
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
