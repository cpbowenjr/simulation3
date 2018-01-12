import { createStore, applyMiddleware} from "redux";
import reducer from './ducks/users';
import promisedMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(promisedMiddleware()));