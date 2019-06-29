import React, { Component } from "react";

//関数コンポーネント
const App = () => {
  return <Counter />;
};

//
class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
    console.log(this.state);
  }

  //メソッド名= ()引数, => {}function
  handlePlusButton = () => {
    console.log("handlePlusButton");
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  handleMinusButton = () => {
    console.log("handleMinusButton");
    console.log(this.state.count);
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
        <div>
          buttonのonclick等の関数には、onclick=｛関数名｝という書き方で書く
        </div>
      </React.Fragment>
    );
  }
}

export default App;
