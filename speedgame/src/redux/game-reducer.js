const INITIAL_STATE = false;

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GAME ON':
      return true;

    case 'GAME OFF':
      return false;

    default:
      return state;
  }
};

export default gameReducer;
