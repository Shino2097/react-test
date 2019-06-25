import React from 'react';

//クラスコンポーネント
// class App extends Component {
//   render() {
//     const greeting = "Hi Tom";
//     const dom = <h1 className="foo">{greeting}</h1>;
//     return (
//       <React.Fragment>
//         {dom}
//         <input type="text" onChange={() => {console.log("clicked")}} />
//       </React.Fragment>
//     );
//   }
// }

//関数コンポーネント
const App = () => {
  return (
    <div>
      <Cat ></Cat>
      <Cat></Cat>
    </div>
  )
}

const Cat = () => {
  return <div>meow</div>
}

export default App;
