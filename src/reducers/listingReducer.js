const list1 = require("../mock/API/CONTENTLISTINGPAGE-PAGE1.json");

const listingReducer = (state = { listData: list1 }, payload) => {
  switch (payload.type) {
    case "LISTING_ACTION_RES":
      return { ...state, listData: payload.list };
    default:
      return state;
  }
};

export default listingReducer;
