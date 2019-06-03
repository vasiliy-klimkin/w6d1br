import React, {Component} from 'react'

class Controls extends Component {

  onClickUp = () => {
    console.log(this.props.onNumberUp('Hello from Controls!!!'))
  }


  render() {
    // lets print out this object to see whats in it
    console.log(this)
    return (
      <div>
        <button onClick={ this.onClickUp }>+</button>
        <button onClick={this.props.onNumberDown}>-</button>
      </div>
    )
  }

}


export default Controls;