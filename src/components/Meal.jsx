// ---------- MEAL component ----------
const Meal = ({ meal }) => {
  return (
    <div>
      <h3>{meal.title}</h3>
      <p>{meal.description}</p>
      <p>{meal.price}</p>
      {meal.popular && <p>⭐️ Populaire</p>}
      {meal.picture ? (
        <img
          className="presentation-img"
          src={meal.picture}
          alt={`photo de ${meal.title}`}
        />
      ) : null}
    </div>
  );
};

export default Meal;
