import { Grid } from "semantic-ui-react";

import back from "../../assets/Slices/Back.png";
import navbar from "../../assets/Slices/nav_bar.png";
import search from "../../assets/Slices/search.png";

function Header(props) {
  const pageData = props.movieList;
  const searchList = (e) => {
    const searchString =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    props.setMovies(pageData.filter(({ name }) => name.includes(searchString)));
  };
  return (
    <Grid columns={3} className="header">
      <Grid.Row style={{ backgroundImage: `url(${navbar})` }}>
        <Grid.Column className="icon-position header-column">
          <div>
            <img
              src={back}
              alt="back arrow icon"
              className="header-icons"
            ></img>
          </div>

          <h2>{props.title}</h2>
        </Grid.Column>
        <Grid.Column className="header-column"></Grid.Column>
        <Grid.Column className="icon-position end-justified header-column">
          <div className="content-display">
            <input onChange={(event) => searchList(event)}></input>
            <img src={search} alt="search icon" className="header-icons"></img>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Header;
