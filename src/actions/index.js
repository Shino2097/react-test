//あとでimportできるように、変数化しておく
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export const INCREMENT = () => ({
  type: INCREMENT
});

//書き方はどっちでもいいかも
export const DECREMENT = () => {
  return {
    type: DECREMENT
  };
};
