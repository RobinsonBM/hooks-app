export const PokemonCard = ({ id, name, sprites = [] }) => {
  console.log("🚀 ~ PokemonCard ~ sprites:", sprites);
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>
      {/* imagenes */}
      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
    </section>
  );
};
