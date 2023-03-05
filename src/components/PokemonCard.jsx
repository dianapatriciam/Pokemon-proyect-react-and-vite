import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { getPokemonByIdOrName } from '../services/pokemons.service';
import { CapitalizedText } from '../styles';

const PokemonCard = ({ pokemon, showModalFn, activePokemonFn }) => {
  const getPokemon = async () => {
    const { data, error } = await getPokemonByIdOrName(pokemon.id);

    if (error) {
      alert('Ocurrio un error obteniendo datos de pokemon');
      return;
    }

    activePokemonFn({ ...pokemon, ...data });

    showModalFn(true);
  };

  return (
    <Col md={6} lg={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pokemon.image} />
        <Card.Body>
          <Card.Title>
            <CapitalizedText>{pokemon.name}</CapitalizedText>
          </Card.Title>
          <Button variant="primary" onClick={getPokemon}>
            More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokemonCard;
