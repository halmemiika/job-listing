import React from "react";
import CardDetail from "./CardDetail";
import { Avatar, Paper, Grid, Button, Box } from "@mui/material";

const Card = ({ company, handleFilter }) => {
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
        <Grid
          container
          direction={{ xs: "column", sm: "row" }}
          justifyContent={{ xs: "center", sm: "flex-start" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Grid item sm={1}>
            <Avatar src={require(`../images/${company.logo}`)}></Avatar>
          </Grid>
          <Grid item sm={4}>
            <CardDetail company={company} />
          </Grid>
          <Grid item sm={7}>
            <Box display="flex" flexWrap="wrap" justifyContent="flex-end">
              {tags.map((tag) => (
                <Button value={tag} onClick={handleFilter}>
                  {tag}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Card;
