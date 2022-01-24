import React from "react";
import { Button, Paper, Grid } from "@mui/material";

const Filter = ({ filters, clearFilters, clearAllFilters }) => {
  return (
    <Grid item>
      <Paper elevation={4} sx={{ p: 2, mt: -8 }}>
        <Grid container justifyContent="space-between">
          <Grid item xs={7}>
            {filters.map((f) => (
              <Button
                variant="contained"
                value={f}
                onClick={clearFilters}
                color="info"
                sx={{
                  ":hover": {
                    color: "hsl(180, 52%, 96%)",
                    background: "hsl(180, 14%, 20%)",
                  },
                  mr: 2,
                  mb: { xs: 1, md: 0 },
                }}
              >
                {f}
              </Button>
            ))}
          </Grid>
          <Grid item alignSelf="center">
            <Button
              onClick={clearAllFilters}
              sx={{
                ":hover": {
                  color: "hsl(180, 52%, 96%)",
                  background: "hsl(180, 14%, 20%)",
                },
              }}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Filter;
