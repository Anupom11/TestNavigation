import {TITLE_TEXT_COUNT, BODY_TEXT_COUNT} from '../actions/index.actions';

/* const test = (state = {}, action) => {
  switch (action.type) {
    case TEST_ACTION: {
      //return action.payload;
      return "HEllo world";
    }
    case NO_ACTION: {
      console.log("Action:"+action.payload);
      return "Testing REDUX";
    }
    default:
      return state;
  }
}; */

const textCounter = (state = {}, action) => {
  switch (action.type) {
    case TITLE_TEXT_COUNT: {
      return action.payload;
    }
    case BODY_TEXT_COUNT: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default textCounter;