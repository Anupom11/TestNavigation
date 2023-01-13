
import {TITLE_TEXT_COUNT, BODY_TEXT_COUNT} from '../actions/Index.actions';

const textBodyCounter = (state = '', action) => {
  switch (action.type) {
    case TITLE_TEXT_COUNT: {
      return action.payload;
    }
    case BODY_TEXT_COUNT: {
      return action.payload
    }
    default:
      return state;
  }
};

export default textBodyCounter;

