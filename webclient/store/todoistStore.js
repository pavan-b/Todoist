import { applyMiddleware, createStore, compose } from "redux"

import logger from "redux-logger"

import reducer from "../reducers/todoistReducer"

const middleware = applyMiddleware( logger())

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f=>f,
  middleware
)

export default createStore(reducer,enhancers)
