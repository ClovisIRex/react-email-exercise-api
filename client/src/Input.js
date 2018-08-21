import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class InputTextComponent extends Component {


    constructor(props) {
      super(props);

      this.state = {
        value: '',
        isValid: true
      }
    }

    handleChange({value}) {
      this.setState({value});
    }

    componentDidUpdate() {
        axios.post(`http://localhost:3009/email`,
      {email:"ofer@totango.com"})
        .then(res => {
          console.log(res);
        })
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">React email exercise</h1>
            </header>
            <p className="App-intro">
            </p>
            <label>
              Email:

              <input type="text" value={this.state.email} onChange={e => this.handleChange(e.target)}/>
            </label>
            


          </div>
        );
      }
      
}

export default InputTextComponent;