const initialState = [
  {
    id: 'dwadwa',
    name: 'ww',
    flag: false
  }
];

export default function add(state = initialState, action) {
  switch (action.type) {
    case 'addToLists': {
      return [...state, { ...action.payload }];
    }
    case 'updateItem': {
      console.log(action, state);
      const newState = [...state];
      const item = newState.find(item => item.id === action.id);
      item.flag = !item.flag;
      return newState;
    }

    case 'removeList': {
      state.filter(item => item.id !== action.id);
    }
    default:
      return initialState;
  }
}
