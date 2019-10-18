// import {AUTHORIZED} from '../actions/types'

// export const token = (state = null, action) => {
//   switch (action.type) {
//     case AUTHORIZED:
//         console.log('Communicated with production server for new socket token')
//       return action.token;
//     default:
//       return state;
//   }
// };

//development reducer to throw error

export const token = (state = 'fake token', action) => {
  switch (action.type) {
    default:
      return state;
  }
};