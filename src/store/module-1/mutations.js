import * as types from "./mutation-types"

export default {
  [types.SET_NAME](state,data){
    state.name = data
  }
}