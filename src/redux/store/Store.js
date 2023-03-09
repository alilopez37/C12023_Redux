import {createStore, combineReducers} from 'redux';
import eventReducer from '../reducers/EventReducer';

const Store = createStore(
    combineReducers({
        events: eventReducer,
    })
)

export default Store;