//あとでimportできるように、変数化しておく
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const increment = () => ({
  type: INCREMENT
});

//書き方はどっちでもいいかも
export const decrement = () => {
  return {
    type: DECREMENT
  };
};
