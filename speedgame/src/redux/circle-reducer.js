const INITIAL_STATE = {
  circles: [
    { circleId: 1, isActive: false },
    { circleId: 2, isActive: false },
    { circleId: 3, isActive: false },
    { circleId: 4, isActive: false },
  ],
};

const circleReducer = (state = INITIAL_STATE.circles, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_CIRCLE':
      return {
        ...state,
        circles: action.payload,
      };

    default:
      return state;
  }
};

export default circleReducer;
