import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const Header = props => {
  return (
    <Paper
      elevation={10}
      style={{
        backgroundColor: "#e8ffff",
        height: "150px",
        paddingTop: "100px",
        marginBottom: "50px"
      }}
    >
      <Typography variant="h1" color="primary">
        {props.displayText}
      </Typography>
    </Paper>
  );
};

export default Header;
