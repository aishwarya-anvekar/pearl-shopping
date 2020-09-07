import shopActionTypes  from './shop.types';

// export const fetchCollectionsStart = () => ({
//   type: shopActionTypes.FETCH_COLLECTIONS_START
// });

export const updateCollections = collectionsMap => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});

// export const fetchCollectionsFailure = (errorMessage) => ({
//   type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
//   payload: errorMessage
// });