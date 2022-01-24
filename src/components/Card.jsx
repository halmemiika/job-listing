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
      <Paper elevation={4} sx={{ px: 2 }}>
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Grid item md={1}>
            <Avatar
              src={require(`../images/${company.logo}`)}
              sx={{
                height: "auto",
                width: "100%",
                maxWidth: 80,
                mt: { xs: -4, md: 0 },
              }}
            ></Avatar>
          </Grid>
          <Grid item md={4}>
            <CardDetail company={company} />
          </Grid>
          <Box
            component="span"
            sx={{
              display: { xs: "block", md: "none" },
              width: "100%",
              borderTop: "1px solid hsl(180, 8%, 52%)",
              mb: 2,
            }}
          ></Box>
          <Grid item md={7}>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent={{ md: "flex-end" }}
            >
              {tags.map((tag) => (
                <Button
                  variant="contained"
                  size="small"
                  value={tag}
                  onClick={handleFilter}
                  color="info"
                  sx={{
                    ":hover": {
                      color: "hsl(180, 52%, 96%)",
                      background: "hsl(180, 29%, 50%)",
                    },
                    mr: 2,
                    mb: { xs: 2, md: 0 },
                  }}
                >
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
