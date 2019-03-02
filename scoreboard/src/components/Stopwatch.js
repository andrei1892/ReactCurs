import React, {Component} from 'react';
class Stopwatch extends Component { 

    state = {       
        start: 0 , // ,             ora: new Date()
        isCounting: false   
}

componentDidMount() {
  this.timerID = setInterval(() => this.tick(), 200)
}

componentsWillUnmount() {
  clearInterval(this.timerID);
}

tick = () => {
  if (this.state.isCounting) {
      this.setState(prevState => ({
          start: prevState.start += 1
      })
      )
  }
};

handleStopwatch = () => {
  this.setState(  prevState => ({
  isCounting: !prevState.isCounting
  }));
}

handleReset = () => {
  this.setState({
      start: 0
  })
}

render () {

return (
  <div className="stopwatch">
              <h2>Stopwatch</h2>
              <div className="stopwatch-time">{this.state.start}</div>
              <button onClick={ this.handleStopwatch }>{this.state.isCounting ? 'Stop' : 'Start'}</button>
              <button onClick={this.handleReset}>Reset</button>
          </div>
) ;
}
}

export default Stopwatch;