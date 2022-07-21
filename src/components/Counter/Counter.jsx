import React from 'react';
import Controls from './Controls';
import Value from './value';


class Counter extends React.Component {
    static defaultProps = {
    initialValue:0,
}

  state = {
    good: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
      console.log('increment');
      console.log(this.state.value);
  };
  handleDecrement = event => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
    console.log('decrement');
  };
  render() {
    return (
      <div>
        
            <Value value={this.state.good}/>
            <Controls onIcrement={this.handleIncrement} onDecrement={this.handleDecrement} />
        
      </div>
    );
  }
}

export default Counter;
