import reducer from "./reducer"
import {compose, legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"

const composeEnchancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store=legacy_createStore(reducer,composeEnchancers(applyMiddleware(thunk)));
// console.log(store)
export {store};