import shopActionTypes from './shop.types';

const INITAIL_STATE = {
  collections: null
//   isFetching: false,
//   errorMessage: undefined
};

const shopReducer = (state = INITAIL_STATE, action) => {
  switch(action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    // case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     collections: action.payload
    //   }
    // case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
    //   return {
    //     ...state,
    //     isFetching: false,
    //     errorMessage: action.payload
    //   }
    default:
      return state;
  }
};

export default shopReducer;