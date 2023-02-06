import { createStore, combineReducers } from 'redux';
import { initState } from './constants';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer, filterReducer } from './reducer';

const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReduser, initState, enhancer);
