/* export const TEST_ACTION = 'TEST_ACTION';
export const NO_ACTION = 'NO_ACTION'; */

export const TITLE_TEXT_COUNT = 'TITLE_TEXT_COUNT';
export const BODY_TEXT_COUNT = 'BODY_TEXT_COUNT';

/* export const increment = (val) => {
    return {
      type: 'TEST_ACTION',
      payload: val,
    };
  };

  export const decrement = (val) => {
    return {
      type: 'NO_ACTION',
      payload: val,
    };
  }; */

  export const titleTextCount=(countVal)=> {
    return {
        type: TITLE_TEXT_COUNT,
        payload: countVal,
    };
  };

  export const bodyTextCount=(countVal)=> {
    return {
        type: BODY_TEXT_COUNT,
        payload: countVal,
    }
  };

  