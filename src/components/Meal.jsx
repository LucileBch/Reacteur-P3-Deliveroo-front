// ---------- MEAL component ----------
const Meal = ({ meals }) => {
  return (
    <div>
      <h3>{meals.name}</h3>
      <p>{meals.description}</p>
      <p>{meals.price.formatted}</p>
      {meals.popular && <p>⭐️ Populaire</p>}
      {meals.image ? (
        <img
          className="presentation-img"
          src={meals.image.url}
          alt={meals.image.altText}
        />
      ) : null}
    </div>
  );
};

export default Meal;
