
import rootReducer from './rootReducer'
import { legacy_createStore as createStore } from 'redux'

export default function configurStore() {
  return createStore(rootReducer)
}
