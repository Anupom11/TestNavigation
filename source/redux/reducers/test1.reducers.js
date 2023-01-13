import {TEST_ACTION} from '../actions/Index.actions';

const test1 = (state = {}, action) => {
  switch (action.type) {
  case TEST_ACTION: {
    //return action.payload;
    return "hello new world ";
  }
  default:
    return state;
  }
};

export default test1;

