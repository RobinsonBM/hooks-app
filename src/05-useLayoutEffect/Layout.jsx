import { LoadingMessage, PokemonCard } from "../03-examples";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Informacion del Pokemon</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}
      <button
        className="btn btn-dark mt-2"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Anterior
      </button>
      <button className="btn btn-dark mt-2" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
