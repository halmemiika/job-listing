import React from "react";
import { Chip, Typography, Grid, Box } from "@mui/material";

const CardDetail = ({ company }) => {
  return (
    <Box sx={{ py: 2 }}>
      <Grid container>
        <Grid item>
          <Typography variant="h6" color="#5ba4a4">
            {company.company}
          </Typography>
        </Grid>
        <Grid item>
          {company.new ? (
            <Chip
              label="NEW!"
              color="primary"
              size="small"
              sx={{ ml: 2, pt: 0.5 }}
            />
          ) : null}
          {company.featured ? (
            <Chip
              label="FEATURED"
              color="secondary"
              size="small"
              sx={{ ml: 2, pt: 0.5 }}
            />
          ) : null}
        </Grid>
      </Grid>
      <Typography variant="h6" sx={{ py: 0.5 }}>
        {company.position}
      </Typography>
      <Typography variant="body2" color="effafa">
        {company.postedAt} • {company.contract} • {company.location}
      </Typography>
    </Box>
  );
};

export default CardDetail;
