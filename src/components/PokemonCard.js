import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 20px 10px 0 10px;
  border-radius: 5px;
  padding: 20px;
  color: #fff;
  font-weight: 900;
  font-size: 16px;
  text-transform: capitalize;
  font-family: sans-serif;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const SeeMore = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
`;

const PokemonCard = ({ name }) => {
  return (
    <Card>
      {name}
      <SeeMore>
        <StyledLink to={`/pokemon/${name}`}>{"Veja mais >>"}</StyledLink>
      </SeeMore>
    </Card>
  );
};

export default PokemonCard;
