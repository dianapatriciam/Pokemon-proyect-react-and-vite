import { POKE_API_IMG_URL, POKE_API_URL } from '../utils/constants';

export const getPokemonByIdOrName = async (pokemonIdOrName) => {
  try {
    const request = await fetch(POKE_API_URL + '/' + pokemonIdOrName);
    const jsonData = await request.json();

    return {
      data: jsonData,
      error: null,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

export const getPokemons = async () => {
  try {
    const request = await fetch(POKE_API_URL);
    const jsonData = await request.json();

    const pokemons = jsonData.results.map(({ name, url }) => {
      const id = url.split('/')[6];
      const image = POKE_API_IMG_URL + '/' + id + '.svg';
      return {
        name,
        url,
        id,
        image,
      };
    });

    return { data: pokemons, error: null };
  } catch (error) {
    return { error: true };
  }
};
