import React from 'react';
import axios from 'axios';

var url = 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf111/greeting';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      axios.post(url, {
        name: this.messageInput.value,
        message: this.nameInput.value
      })
      .then(function (response) {
        alert(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={(element) => this.nameInput = element} />
          </label>
          <label>
            Message:
            <input type="text" ref={(element) => this.messageInput = element} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }



export default App;