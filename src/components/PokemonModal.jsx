import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CapitalizedText } from '../styles';
import { useMemo } from 'react';

const calculatePokemonTotalStats = (stats = []) => {
  return stats.reduce(
    (prevValue, currentValue) => prevValue + currentValue.base_stat,
    0
  );
};

const PokemonModal = ({ pokemon, showModal, showModalFn }) => {
  const pokemonTotalStats = useMemo(
    () => calculatePokemonTotalStats(pokemon.stats),
    [pokemon.name]
  );

  return (
    <Modal
      size="lg"
      show={showModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <CapitalizedText>{pokemon.name}</CapitalizedText>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Abilities</h4>
        {pokemon.abilities.map(({ ability }) => (
          <p key={ability.name}>
            <CapitalizedText>{ability.name}</CapitalizedText>
          </p>
        ))}
        <h4>Experience</h4>
        <CapitalizedText>{pokemon.base_experience}</CapitalizedText>
        <h4>Height</h4>
        {pokemon.height}
        <h4>Weight</h4>
        {pokemon.weight}
        <h4>Stats {pokemonTotalStats}</h4>
        {pokemon.stats.map(({ stat, base_stat }) => (
          <p key={stat.name}>
            <CapitalizedText>
              {stat.name}:{base_stat}
            </CapitalizedText>
          </p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => showModalFn(false)}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(PokemonModal);
