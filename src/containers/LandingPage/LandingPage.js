import React, { Component } from "react";
import axios from "axios";
import Video from "../../components/Video/Video";
import Header from "../../components/Header/Header";
import CircularProgress from "@material-ui/core/CircularProgress";

class LandingPage extends Component {
  state = {
    videos: null
  };

  componentDidMount() {
    axios
      .get("https://utube-clone-e00e1.firebaseio.com/videoLinks.json")
      .then(response => {
        const links = Object.values(response.data);
          console.log(links);
        this.setState({
          videos: links
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header displayText="Youtube" />
        {!this.state.videos ? (
          <CircularProgress size={100} />
        ) : this.state.videos.length >= 1 ? (
          this.state.videos.map((link, index) => {
            return <Video src={link} key={index} />;
          })
        ) : (
          <p>Nothing to show</p>
        )}
      </React.Fragment>
    );
  }
}

export default LandingPage;
