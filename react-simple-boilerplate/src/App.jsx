// always you want to import React and Component
import React, {Component} from 'react';
import Controls from './Controls'

let number = 0;


// class ____ extends Component
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      showHello: false

    }
  }
  // ES5 <- try not to use
  hello() {
    console.log('hello world')
  }

  numberUp = (arg) => {
    console.log('LINE 33 FROm app.jsx')
    console.log(arg);
    let newNumber = this.state.counter + 1;
    this.setState({counter: newNumber});
  }

  numberDown = () => {
    let newNumber = this.state.counter - 1;
    this.setState({counter: newNumber});
  }

  mapFunc = () => {
    let arr = []
    for (let i = 0; i < 10; i++) {
      arr.push(<p>i</p>)
    }
    return arr
  }


  // MUUUUUUUUST have a render
  // Wrap your html/jsx into a parent!!!
  render() {
    return (
      <div>
        <h1>{<h1>{23 - 43}</h1>}</h1>
        {[1,2,3,4,5].map(e => <p>this is an element with value {e}</p>)}
        {false  ? <h1>hello</h1> : <h2>false</h2>}
        <Controls
          aaa={'bllllaaaaa'}
          val={1234}
          onNumberUp={this.numberUp}
          onNumberDown={this.numberDown}/>
      </div>
    );
  }
}

// have to export our class
export default App;
