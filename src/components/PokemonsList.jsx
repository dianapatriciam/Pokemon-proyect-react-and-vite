import React, { useCallback, useState } from 'react';
import PokemonCard from './PokemonCard';
import PokemonModal from './PokemonModal';

const PokemonsList = ({ pokemons }) => {
  const [activePokemon, setActivePokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const showModalFn = useCallback((value) => {
    setShowModal(value);
  }, []);

  const activePokemonFn = useCallback((pokemonWithDetails) => {
    setActivePokemon(pokemonWithDetails);
  }, []);

  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard
          pokemon={pokemon}
          key={pokemon.id}
          showModalFn={showModalFn}
          activePokemonFn={activePokemonFn}
        />
      ))}

      {activePokemon && (
        <PokemonModal
          pokemon={activePokemon}
          showModal={showModal}
          showModalFn={showModalFn}
        />
      )}
    </>
  );
};

export default PokemonsList;
