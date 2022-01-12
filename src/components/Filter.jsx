import React from "react";
import { Button } from "@mui/material";

const Filter = ({ filters, clearFilters }) => {
  return (
    <div>
      {filters.map((f) => (
        <Button value={f} onClick={clearFilters}>
          {f}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
