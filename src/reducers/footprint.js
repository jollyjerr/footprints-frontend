import {AUTHORIZED} from '../actions/types'

export const token = (state = null, action) => {
  switch (action.type) {
    case AUTHORIZED:
        console.log('authorized was triggered')
      return action.token;
    default:
      return state;
  }
};