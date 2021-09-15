import * as actions from "../data/actionTypes";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.REFRESH:
      return action.payload.data;
    default:
      return state;
  }
}
