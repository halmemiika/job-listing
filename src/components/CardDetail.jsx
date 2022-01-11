import React from "react";

const CardDetail = ({ company }) => {
  return (
    <div>
      <div>{company.company}</div>
      <div>{company.position}</div>
      <div>{company.location}</div>
    </div>
  );
};

export default CardDetail;
