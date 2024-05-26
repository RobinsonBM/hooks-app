import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const imgRef = useRef();
  const [pokename, setPokename] = useState("");

  useLayoutEffect(() => {
    const name = imgRef.current.getAttribute("alt");
    setPokename(name);
  }, [id]);

  return (
    <>
      <section style={{ height: 200 }}>
        <h2 className="text-capitalize">
          #{id} - {name}
        </h2>
        {/* imagenes */}
        <div>
          {sprites.map((sprite) => (
            <img key={sprite} src={sprite} alt={name} ref={imgRef} />
          ))}
        </div>
      </section>
      <code>{JSON.stringify(pokename)}</code>
    </>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sprites: PropTypes.array.isRequired,
};
