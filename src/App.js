import React from 'react';

//関数コンポーネント
const App = () => {

  const profiles = [
    {name: "taro", age: 10},
    {name: "jiro", age: 20},
    {name: "kuro"}
    
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

User.defaultProps = {
  age: 99
}

export default App;
