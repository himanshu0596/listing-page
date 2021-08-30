import { Grid } from "semantic-ui-react";
import poster4 from "../../assets/Slices/poster4.jpg";
import poster5 from "../../assets/Slices/poster5.jpg";
import poster6 from "../../assets/Slices/poster6.jpg";
import poster7 from "../../assets/Slices/poster7.jpg";
import poster8 from "../../assets/Slices/poster8.jpg";
import poster9 from "../../assets/Slices/poster9.jpg";
import MissingPoster from "../../assets/Slices/placeholder_for_missing_poster.png";

function ImageCard(props) {
  return props.moviesList.map((item, key) => {
    return (
      <Grid.Column key={key} className="card-column">
        <img
          alt="Not Available"
          src={
            item["poster-image"] === "poster4.jpg"
              ? poster4
              : item["poster-image"] === "poster5.jpg"
              ? poster5
              : item["poster-image"] === "poster6.jpg"
              ? poster6
              : item["poster-image"] === "poster7.jpg"
              ? poster7
              : item["poster-image"] === "poster8.jpg"
              ? poster8
              : item["poster-image"] === "poster9.jpg"
              ? poster9
              : MissingPoster
          }
        />
        <div>
          <p className="image-name">
            {item.name.length > 15
              ? item["name"].substr(0, 15 - 1) + "..."
              : item.name}
          </p>
        </div>
      </Grid.Column>
    );
  });
}

export default ImageCard;
