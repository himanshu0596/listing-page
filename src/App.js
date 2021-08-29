import React, { useState } from "react";
import Header from "./components/Header/Header";
import ListingPage from "./components/ListingPage/ListingPage";
import { useStore } from "react-redux";

function App() {
  const store = useStore();
  const [data, setData] = useState(
    store.getState().listingReducer.listData.page["content-items"].content
  );
  return (
    <div>
      <Header
        movieList={data}
        setMovies={setData}
        title={store.getState().listingReducer.listData.page.title}
      />
      <ListingPage movieList={data} setMovies={setData} />
    </div>
  );
}

export default App;
