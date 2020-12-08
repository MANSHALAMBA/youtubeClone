import React from "react";

const Video = props => {
  const styles = {
    "margin-left": "20px",
    "margin-right": "20px"
  };

  return (
    // <video width="320" height="240" controls style={styles} src={props.src}>
    //   {/* <source src={props.src} type="video/mp4" /> */}
    // </video>
    <iframe
      width="320"
      height="240"
      style={styles}
      src={props.src}
      allowfullscreen="allowfullscreen"
      mozallowfullscreen="mozallowfullscreen"
      msallowfullscreen="msallowfullscreen"
      oallowfullscreen="oallowfullscreen"
      webkitallowfullscreen="webkitallowfullscreen"
    ></iframe>
  );
};

export default Video;
