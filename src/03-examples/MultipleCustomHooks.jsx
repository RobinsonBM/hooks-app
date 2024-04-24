import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, hasError, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/4"
  );

  return (
    <>
      <h1>Informacion del Pokemon</h1>
      <hr />
      {isLoading && <p>Cargando...</p>}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <h2>{data?.name}</h2>
    </>
  );
};
