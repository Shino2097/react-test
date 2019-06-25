import React from 'react';
import PropTypes from 'prop-types';

//関数コンポーネント
const App = () => {

  const profiles = [
    {name: "taro", age: 10},
    {name: "jiro", age: 20},
    {name: "test", age:3}
    
  ]

  return (
    <div>
      {
        //mapは配列データを各1要素ごとに扱うメソッド
        //要素がprofile, インデックスがindex
        profiles.map( (profile, index, array) => {
          return <User key={index} name={profile.name} age={profile.age}></User>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>My name is {props.name}. I am {props.age} years old.</div>
}

//propsについて型チェック
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
