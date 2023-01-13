import {TITLE_TEXT_COUNT} from '../actions/Index.actions';

const textTitleCounter = (state = '', action) => {
  switch (action.type) {
    case TITLE_TEXT_COUNT: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default textTitleCounter;

