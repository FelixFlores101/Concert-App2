import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Item from './item.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }

  getBands() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/events', true)
    xhr.onload = function() {
      let response = JSON.parse(xhr.responseText)
      console.log(response.events)
      this.setState({
        events: response.events
      })
    }.bind(this)
    xhr.send()


  }

  componentWillMount() {
    this.getBands()
  }

  renderEvents() {
    if(this.state.events.length > 0) {
      this.state.events.map((event) => {
        return (
          <Item />
        )
      })
    } else {
      return (
        <div>No Events Yet.</div>
      )
    }
  }

  render() {
    var renderEvents = this.state.events.map(function(event) {
      return (
        <Item key={event.id} event={event} />
      )
    })
    return (
      <div className="App container-grid">
        {renderEvents}
      </div>
    );
  }
}

export default App;
