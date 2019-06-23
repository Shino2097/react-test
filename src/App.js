import React, {Component} from 'react';

class App extends Component {
  render() {
    const greeting = "Hi Tom";
    const dom = <h1 className="foo">{greeting}</h1>;
    return (
      <React.Fragment>
        {dom}
        <input type="text" onChange={() => {console.log("clicked")}} />
      </React.Fragment>
    );
  }
}

export default App;
