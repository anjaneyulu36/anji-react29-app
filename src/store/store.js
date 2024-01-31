import TodoReducer from "./reducer/todoreducer";

import {createStore} from "redux";

let store=createStore(TodoReducer);

export default store;