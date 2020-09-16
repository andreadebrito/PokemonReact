import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const PokemonInfo = styled.div`
  display: flex;
  margin: 20px 20%;
  padding: 20px 20px;
  background: #fff;
  border-radius: 5px;
`;

const Header = styled.h1`
  text-transform: capitalize;
  font-family: Lato;
  font-size: 32px;
  line-height: 32px;
  margin: 0 0 0 8px;
  font-weight: 800;
  color: #444;
`;

const PokemonParagraph = styled.div`
  width: 60%;
  border-top: 1px solid #444;
  font-size: 12px;
  padding: 4px;
`;

const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
`;

const InfoBox = styled.div`
  padding-left: 20px;
  width: 100%;
`;

const PokemonType = styled.span`
  margin: 0 2px;
  text-transform: capitalize;
`;

const PokemonDetail = () => {
  const [pokemonInfo, updatePokemonInfo] = useState();
  let { name } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      updatePokemonInfo(response.data);
    });
  }, []);
  
  return (
    <PokemonInfo>
      <PokemonImage
        src={pokemonInfo?.sprites.other.dream_world.front_default}
        alt=""
      />
      <InfoBox>
        <Header>{pokemonInfo?.name}</Header>
        <PokemonParagraph>№: {pokemonInfo?.id}</PokemonParagraph>
        <PokemonParagraph>Altura: {pokemonInfo?.height}ft</PokemonParagraph>
        <PokemonParagraph>Peso: {pokemonInfo?.weight}lbs</PokemonParagraph>

        <PokemonParagraph>
          Tipos:
          {pokemonInfo?.types.map((type) => (
            <PokemonType>{type.type.name}</PokemonType>
          ))}
        </PokemonParagraph>
      </InfoBox>
    </PokemonInfo>
  );
};

export default PokemonDetail;
