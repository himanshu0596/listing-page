import PropTypes from "prop-types";
import React from "react";
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom";
import { Grid, Button, Modal, Image, Icon} from "semantic-ui-react";
import VrStudio from '../../assets/video/vrstudio.mp4'
import NewBank from "../../assets/Image/newbank.jpg";
import ARStore from "../../assets/Image/arstore.jpg";
import GuidedJourney from "../../assets/Image/guidedjourney.jpg";

import "./NavigationCard.scss";


class NavigationCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shown : false,
      open: false
    }
  }
  static propTypes = {
    Heading: PropTypes.string.isRequired,
    Subheader: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    left: PropTypes.bool.isRequired,
    numbering: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    onClick1: PropTypes.func.isRequired,
    ImageUrl: PropTypes.string.isRequired,
  };
  onClick1 = (item) => {
    console.log(item);
    this.props.history.push({
      pathname: item,
    });
  };

  render() {
    // const { props: { link, left, Heading, Subheader, Description, ImageUrl } } = this;
    const data = this.props.data;
    const numbering = this.props.index + 1;

    /**
     * For reordering cols in mobile view (content comes below image)
     */
    const content_col = (
      <Grid.Column width={10} className="card-content">
        <h2>{data.heading}</h2>
        <p>{data.description}</p>   
        <Link to={data.heading == 'AR Store' ? "arstore" : null}>
          <Button
            className="button-class"
            size={"big"}
            content={data.buttonName}
            circular
          />
        </Link>
      </Grid.Column>
    );
    const img_col = (
      <Grid.Column width={6} className="card-image-right">
        <Modal
          onClose={() => this.setState({open: false})}
          onOpen={() => this.setState({open : true})}
          open={this.state.open}
          trigger={
            <div className="play-icon-container">
              <Image className="image" src={ data.heading == 'AR Store' ? ARStore : data.heading == 'Guided Journey' ? GuidedJourney : NewBank} /> 
              <Icon className="play-icon" name='play circle outline' />
            </div>
          }
        >
          <Modal.Content image>
            <Modal.Description>
              <video controls autoplay><source src={VrStudio} type="video/mp4"></source></video>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => this.setState({open : false})}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid.Column>
    );
    const content_img = (
      <Grid.Row className="card-component-right">
        {content_col}
        {img_col}
      </Grid.Row>
    );

    const content_img_mobile_view = (
      <Grid.Row className="card-component-right">
        {img_col}
        {content_col}
      </Grid.Row>
    );

    return (
      <div className="card-component">
        <Grid stackable>
          {numbering % 2 !== 0 && (
            <Grid.Row className="card-component-left">
              <Grid.Column width={6} className="card-image-left">
                <Modal
                  onClose={() => this.setState({open: false})}
                  onOpen={() => this.setState({open : true})}
                  open={this.state.open}
                  trigger={<div className="play-icon-container">
                    <Image className="image" src={ data.heading == 'AR Store' ? ARStore : data.heading == 'Guided Journey' ? GuidedJourney : NewBank} /> 
                    <Icon className="play-icon" name='play circle outline' />
                  </div>}
                  >
                  <Modal.Content image>
                    <Modal.Description className="video">
                      <video className="video" controls autoplay><source src={VrStudio} type="video/mp4"></source></video>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='black' onClick={() => this.setState({open : false})}>
                      Close
                    </Button>
                  </Modal.Actions>
                  </Modal>
              </Grid.Column>
              <Grid.Column width={10} className="card-content">
                <h2>{data.heading}</h2>
                <p>{data.description}</p>
                <Link to={data.heading == 'AR Store' ? "arstore" : null}>
                  <Button
                      className="button-class"
                      size={"big"}
                      content={data.buttonName}
                      circular
                  />
                </Link>
              </Grid.Column>
            </Grid.Row>
          )}
          {numbering % 2 === 0 &&
            (window.innerWidth <= 768 ? content_img_mobile_view : content_img)}
        </Grid>
      </div>
    );
  }
}
export default withRouter(NavigationCard);
