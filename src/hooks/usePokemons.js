import { useState, useEffect } from 'react';
import { getPokemons } from '../services/pokemons.service';

export const usePokemons = () => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('loading');

  useEffect(() => {
    const fetchPokemons = async () => {
      const { data: incomingData, error } = await getPokemons();

      if (error) {
        setFetchStatus('error');
        return;
      }

      setData(incomingData);
      setFetchStatus('completed');
    };

    fetchPokemons();
  }, []);

  return { pokemons: data, fetchStatus };
};
