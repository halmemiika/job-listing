import React, { useState } from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import companies from "./data.json";
import { Button, Container, Grid } from "@mui/material";

const App = () => {
  const [filter, setFilter] = useState(false);
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        {filter ? <Filter /> : null}
        {companies.map((company) => (
          <Card key={company.id} company={company} />
        ))}
        <Button onClick={() => setFilter(!filter)} variant="contained"></Button>
      </Grid>
    </Container>
  );
};

export default App;
