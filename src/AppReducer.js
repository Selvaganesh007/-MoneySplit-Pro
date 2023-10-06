export const groupDetailReducer = (state, action) => {
  switch (action.type) {
    case 'AddNewGroup':
      return [...state, action.payload]
    default: return state;
  }
}