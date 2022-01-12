import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Filter from "./components/Filter";
import data from "./data.json";
import { Container, Grid, CssBaseline } from "@mui/material";
import "./App.css";

const App = () => {
  const [filters, setFilters] = useState([]);
  const [companies, setCompanies] = useState(data);

  useEffect(() => {
    const filteredCompanies = companies.filter((company) => {
      const tags = [company.level, company.role].concat(
        company.tools,
        company.languages
      );
      return filters.every((f) => tags.includes(f));
    });
    setCompanies(filteredCompanies);
  }, [filters]); //eslint-disable-line

  const handleFilter = (e) => {
    const newTag = e.target.value;
    if (!filters.length) {
      setFilters([newTag]);
    } else {
      if (!filters.includes(newTag)) {
        const newFilterRule = filters.concat(newTag);
        setFilters(newFilterRule);
      }
    }
  };

  const clearFilters = (e) => {
    const tag = e.target.value;
    const newFilters = filters.filter((f) => f !== tag);
    setFilters(newFilters);
  };

  console.log(filters);
  return (
    <CssBaseline>
      <div className="banner"></div>
      <Container maxWidth="lg">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          {filters.length ? (
            <Filter filters={filters} clearFilters={clearFilters} />
          ) : null}
          {companies.map((company) => (
            <Card
              key={company.id}
              company={company}
              handleFilter={handleFilter}
            />
          ))}
        </Grid>
      </Container>
    </CssBaseline>
  );
};

export default App;
