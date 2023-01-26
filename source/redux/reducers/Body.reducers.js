
import {TITLE_TEXT_COUNT, BODY_TEXT_COUNT} from '../actions/index.actions';

const textBodyCounter = (state = '', action) => {
  switch (action.type) {
    case BODY_TEXT_COUNT: {
      return action.payload
    }
    default:
      return state;
  }
};

export default textBodyCounter;

