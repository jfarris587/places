import React, { Component } from 'react';
import API from '../api/API.js';
import Information from './Information';
import Image from './Image';

class App extends Component {
  constructor(props){
    super(props);

    this.state = null;
  }

  async componentDidMount(){
    const RESTAPI = new API();
    const request = await RESTAPI.api_call();

    this.setState(request);
  }

  render() {
    if(this.state == null){
      return null;
    }

    else{
      return (
        <div id="container">
          <Information
            name = {this.state.name}
            flag = {this.state.flag}
          />
          <Image
            array = {[
              ["Capital", this.state.capital],
              ["Region", this.state.region],
              ["Population", this.state.population],
              ["Language", this.state.language]
            ]}

          />
        </div>
      );
    }
  }
}

export default App;
