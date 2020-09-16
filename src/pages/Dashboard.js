import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import PokemonCard from "../components/PokemonCard";

const DashboardBox = styled.div`
  padding: 20px 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-flow: wrap;
`;

const Dashboard = () => {
  const [pokemonList, updatePokemonList] = useState([]);

  useEffect(() => {
    const minhaPromise = axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    minhaPromise.then((response) => {
      // response.data.results
      updatePokemonList(response.data.results);
    });
  }, []); //base_url

  // useEffect(() => {
  //   console.log("USe effect executado");
  // }, [pokemonList]);

  return (
    <DashboardBox>
      {pokemonList.map(({ name, url }) => {
        return <PokemonCard name={name} />;
      })}
    </DashboardBox>
  );
};

export default Dashboard;
