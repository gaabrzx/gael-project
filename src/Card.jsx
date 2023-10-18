import "./Card.scss";

const Card = () => {
  return (
    <div>
      <div className="card-container">
        <img src="./mylogo.png" />
        <h1>Título</h1>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, eos.
        </p>
        <button className="more-btn">Ver mais</button>
      </div>
    </div>
  );
};

export default Card;
