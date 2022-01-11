import React from "react";
import CardDetail from "./CardDetail";
import { Avatar, Paper, Grid, Button } from "@mui/material";

const Card = ({ company }) => {
  let tags = [];
  tags.push(company.role);
  tags.push(company.level);
  tags = tags.concat(company.languages);
  if (company.tools.length) {
    tags = tags.concat(company.tools);
  }

  return (
    <Grid item>
      <Paper elevation={4}>
        <Avatar src={require(`../images/${company.logo}`)}></Avatar>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <CardDetail company={company} />
          </Grid>
          <Grid item xs={12} sm={4}>
            {tags.map((tag) => (
              <Button>{tag}</Button>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
