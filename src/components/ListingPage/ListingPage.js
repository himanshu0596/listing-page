import React, { Suspense, useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import actionList from "../../actions";
import { useStore, useDispatch } from "react-redux";
import poster1 from "../../assets/Slices/poster1.png";
import poster2 from "../../assets/Slices/poster2.png";
import poster3 from "../../assets/Slices/poster3.png";

let pages = [];
const ImageCard = React.lazy(() => import("../Card/ImageCard"));
function ListingPage(props) {
  const store = useStore();
  const dispatch = useDispatch();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 540 && pages.length === 0) {
      dispatch(
        actionList.listingAction(
          require("../../mock/API/CONTENTLISTINGPAGE-PAGE2.json")
        )
      );
      pages.push(
        store.getState().listingReducer.listData.page["content-items"].content
      );
    } else if (position > 1600 && pages.length === 1) {
      dispatch(
        actionList.listingAction(
          require("../../mock/API/CONTENTLISTINGPAGE-PAGE3.json")
        )
      );
      pages.push(
        store.getState().listingReducer.listData.page["content-items"].content
      );
    }

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid columns={3} className="listing-grid">
      <Grid.Row>
        {props.movieList.map((item, key) => {
          return (
            <Grid.Column key={key} className="card-column">
              <img
                src={
                  item["poster-image"] === "poster1.jpg"
                    ? poster1
                    : item["poster-image"] === "poster2.jpg"
                    ? poster2
                    : poster3
                }
              />
              <div>
                <p className="image-name">{item.name}</p>
              </div>
            </Grid.Column>
          );
        })}

        <Suspense fallback={<div>Loading...</div>}>
          {pages.map((item, key) => {
            return (
              <ImageCard
                moviesList={item.filter(({ name }) =>
                  name.includes(props.searchString)
                )}
                key={key}
              />
            );
          })}
        </Suspense>
      </Grid.Row>
    </Grid>
  );
}

export default ListingPage;
