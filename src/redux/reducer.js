import { initState } from './constants';

export const contactsReducer = (
  state = initState.contacts,
  { type, payload }
) => {
  switch (type) {
    case 'ADD':
      return [payload, ...state];
      case 'REMOVE':
        return state.filter(contact => contact.id !== payload)
    default:
      return state;
  }
};

export const filterReducer = (state = initState.filter, { type, payload }) => {
  switch (type) {
    case 'FILTER':
      return payload;
    default:
      return state;
  }
};
