import {TITLE_TEXT_COUNT} from '../actions/Index.actions';

const test1 = (state = {}, action) => {
  switch (action.type) {
  case TITLE_TEXT_COUNT: {
    //return action.payload;
    return "hello new world ";
  }
  default:
    return state;
  }
};

export default test1;

