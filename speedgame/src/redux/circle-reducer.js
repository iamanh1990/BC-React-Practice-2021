const INITIAL_STATE = [
  { circleId: 1, isActive: false },
  { circleId: 2, isActive: false },
  { circleId: 3, isActive: false },
  { circleId: 4, isActive: false },
  { circleId: 5, isActive: false },
  { circleId: 6, isActive: false },
];

const circleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_CIRCLE':
      return state.map((circle, index) => {
        if (index === action.payload) {
          return { ...circle, isActive: true };
        } else {
          return circle;
        }
      });

    case 'SWITCH_OFF_CIRCLES':
      return state.map((circle) => ({ ...circle, isActive: false }));

    default:
      return state;
  }
};

export default circleReducer;
