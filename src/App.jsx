import 'bootstrap/dist/css/bootstrap.min.css';
import { usePokemons } from './hooks/usePokemons';
import Error from './components/Error';
import Layout from './components/Layout';
import Loader from './components/Loader';
import PokemonsList from './components/PokemonsList';

function App() {
  const { pokemons, fetchStatus } = usePokemons();

  if (fetchStatus === 'loading') {
    return <Loader />;
  }

  if (fetchStatus === 'error') {
    return <Error errorMessage="Error Loading Pokemons" />;
  }

  return (
    <Layout>
      <PokemonsList pokemons={pokemons} />;
    </Layout>
  );
}

export default App;
