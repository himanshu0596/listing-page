import actionTypes from "./constants";

const listingAction = (list) => {
  return { type: actionTypes.LISTING_ACTION_REQ, payload: { list } };
};

export default listingAction;
