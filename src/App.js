import React, { useState } from "react";
import Header from "./components/Header/Header";
import ListingPage from "./components/ListingPage/ListingPage";
import { useStore } from "react-redux";

function App() {
  const store = useStore();
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState(
    store.getState().listingReducer.listData.page["content-items"].content
  );
  return (
    <div>
      <Header
        title={store.getState().listingReducer.listData.page.title}
        setSearch={setSearchString}
      />
      <ListingPage
        movieList={data.filter(({ name }) => name.includes(searchString))}
        searchString={searchString}
      />
    </div>
  );
}

export default App;
