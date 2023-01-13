
export const TITLE_TEXT_COUNT = 'TITLE_TEXT_COUNT';
export const BODY_TEXT_COUNT  = 'BODY_TEXT_COUNT';

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

